
import clsx from 'clsx';

interface ChatBubbleProps {
  text: string;
  side?: 'left' | 'right';
}

export default function ChatBubble({ text, side = 'left' }: ChatBubbleProps) {
  const isLeft = side === 'left';

  return (
    <>
    <div className={clsx('flex items-start', isLeft ? 'justify-start' : 'justify-end')}>
      <div className={clsx(
        'relative max-w-xs px-4 py-2 text-sm rounded-lg',
        isLeft
          ? 'bg-gray-200 text-gray-800 rounded-bl-none'
          : 'bg-orange-400 text-white rounded-br-none'
      )}>
        {text}

        {/* Tail */}
        <div
          className={clsx(
            'absolute bottom-0 w-0 h-0 border-t-[10px] border-t-transparent',
            isLeft
              ? 'left-0 -ml-2 border-l-[10px] border-l-transparent border-b-[10px] border-b-gray-200'
              : 'right-0 -mr-2 border-r-[10px] border-r-transparent border-b-[10px] border-b-orange-400'
          )}
        />
      </div>
    </div>
    </>
  );
}