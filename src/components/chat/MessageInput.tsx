
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export default function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-furia-gray">
      <div className="flex gap-2">
        <Input
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          className="bg-furia-gray border-furia-gray text-furia-white"
        />
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
