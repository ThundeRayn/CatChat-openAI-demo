import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button"
import ChatBubble from "../../components/ui/chatbubble"

const FUNCTION_URL = 'https://ok35xbmgxbwcyn6metu6ygxbnq0mktyi.lambda-url.ca-central-1.on.aws';

type Message = {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot = () => {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendRef = useRef<HTMLButtonElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "You saw a cat. it is curious about you, but it doesn't make any sound.",
      sender: 'bot'
    }
  ]);
  
  // Handle new message submission
 const newMessage: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setInputValue('');
    const newMessages: Message[] = [...messages, {
      text: inputValue,
      sender: 'user'
    }];
    setMessages(newMessages);
    const response = await fetch(FUNCTION_URL, {
      method: 'POST',
      body: JSON.stringify({ messages: newMessage })
    });
    setMessages(
      [...newMessages, {
        text: await response.text(),
        sender: 'bot'
      }]
    )
  }

  //dynamically adjust the height of the textarea
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) { return; }

    const minHeight = 48; // px, matches h-12
    const maxRows = 3;
    const lineHeight = 24; // px, matches leading-6
    const maxHeight = maxRows * lineHeight;

    textarea.style.height = 'auto';
    const scrollHeight = textarea.scrollHeight;

    if (scrollHeight <= minHeight) {
      textarea.style.height = minHeight + 'px';
      textarea.style.overflowY = 'hidden';
    } else if (scrollHeight <= maxHeight) {
      textarea.style.height = scrollHeight + 'px';
      textarea.style.overflowY = 'hidden';
    } else {
      textarea.style.height = maxHeight + 'px';
      textarea.style.overflowY = 'auto';
    }
  };
  // Adjust height on initial render and when inputValue changes
  useEffect(() => {
    adjustHeight();
  }, [inputValue]);

  
  return (
    <div
      className="flex flex-col w-full h-full min-w-100 bg-white rounded-lg shadow-lg sm:w-1/3 sm:h-5/6"
    >
      
      <div id="chat-title" className="flex-[1] flex justify-center items-center bg-orange-400 rounded-t-lg shadow-lg">
        <img src="/cat-with-wry-smile-svgrepo-com.svg" alt="logo" width={30} height={30} />
      </div>

      <div id="chat-field" className="flex-[5] p-6 space-y-3 overflow-auto">
        {messages.map((message, index) => 
          <ChatBubble 
            key={index}
            text={message.text} 
            side={message.sender === 'user' ? 'right' : 'left'}
          />
        )}
      </div>

      <div id="send-field" className="flex px-6 py-4 border border-t-0 border-orange-300 rounded-b-lg">
        <form 
          onSubmit={newMessage}
          className="flex justify-center items-center gap-2 w-full">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows={1}
            placeholder="Say something to the cat..."
            className="w-90 px-2 py-2 leading-6 border border-orange-300 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400/70 scrollbar-orange"
          /> 
          <Button 
            ref={sendRef}
            variant="default_cat" 
            className="w-20" type="submit" value="Send">Send</Button>
        </form>
      </div>
    </div>
  )
}
export default Chatbot;