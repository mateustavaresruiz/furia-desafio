
import { Message } from "./ChatBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  // Formatar timestamp
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Iniciais para o avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="flex items-start gap-3 mb-4 animate-fade-in">
      <Avatar className="h-8 w-8 bg-furia-blue">
        <AvatarImage src={message.user.avatar} />
        <AvatarFallback className="bg-furia-blue text-furia-white text-xs">
          {getInitials(message.user.name)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <span className="font-medium">{message.user.name}</span>
          <span className="text-xs text-muted-foreground">{formatTime(message.timestamp)}</span>
        </div>
        <p className="text-sm mt-1 text-furia-white">{message.content}</p>
      </div>
    </div>
  );
}
