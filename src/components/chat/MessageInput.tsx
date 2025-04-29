
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Smile, Paperclip, Video, Mic } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  onTypingStart?: () => void;
  disabled?: boolean;
}

export default function MessageInput({ onSendMessage, onTypingStart, disabled }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    
    if (!isTyping) {
      setIsTyping(true);
      onTypingStart?.();
    }
    
    if (typingTimeout) clearTimeout(typingTimeout);
    
    setTypingTimeout(setTimeout(() => {
      setIsTyping(false);
    }, 1000));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
      setIsTyping(false);
      if (typingTimeout) clearTimeout(typingTimeout);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-furia-gray bg-furia-black">
      <div className="flex items-center gap-2">
        <Button 
          type="button" 
          size="icon" 
          variant="ghost" 
          className="bg-furia-gray hover:bg-furia-gray/80"
          disabled={disabled}
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <Input
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={handleInputChange}
          disabled={disabled}
          className="bg-furia-gray border-furia-gray text-furia-white flex-1"
        />
        
        <Button 
          type="button" 
          size="icon" 
          variant="ghost" 
          className="bg-furia-gray hover:bg-furia-gray/80"
          disabled={disabled}
        >
          <Smile className="h-5 w-5" />
        </Button>
        
        <Button 
          type="button" 
          size="icon" 
          variant="ghost" 
          className="bg-furia-gray hover:bg-furia-gray/80"
          disabled={disabled}
        >
          <Mic className="h-5 w-5" />
        </Button>
        
        <Button 
          type="submit" 
          size="icon" 
          disabled={disabled || !message.trim()} 
          className="bg-furia-blue hover:bg-blue-600"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}
