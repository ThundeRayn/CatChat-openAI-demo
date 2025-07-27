import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button"

const Chatbot = () => {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');
  
  //dynamically adjust the height of the textarea
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea){return};

    textarea.style.height = 'auto';

    const maxRows = 3;
    const lineHeight = 24;  // Assuming a line height of 24px, adjust as necessary
    const maxHeight = maxRows * lineHeight;
    const scrollHeight = textarea.scrollHeight;

    if (scrollHeight <= maxHeight) {
      textarea.style.height = scrollHeight + 'px';
      textarea.style.overflowY = 'hidden';
    } else {
      textarea.style.height = maxHeight + 'px';
      textarea.style.overflowY = 'auto';
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  
  return (
    <div 
      className="flex flex-col h-5/6 w-3/7 min-w-100 min-h-100 rounded-lg shadow-lg bg-white">
      
      <div id="chat-title" className="flex-[1] bg-orange-400 rounded-t-lg">
        <h2>Chatbot</h2>
      </div>

      <div id="chat-field" className="flex-[5] p-6">
        <p>something there</p>
        <p>something there</p>
        <p>something there</p>
      </div>

      <div id="send-field" className="flex px-6 py-4 border border-t-0 border-orange-300 rounded-b-lg">
        <form className="flex justify-center items-center gap-2 w-full">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            placeholder="Say something to the cat..."
            className="w-90 h-12 border border-orange-300 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400/70 scrollbar-orange"
          /> 
          <Button 
            variant="default_cat" 
            className="w-20" type="submit" value="Send">Send</Button>
        </form>
      </div>
  
    </div>
  )
}

export default Chatbot