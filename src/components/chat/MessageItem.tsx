
import { useState } from "react";
import { Message } from "./ChatBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, Heart, Smile, Check, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MessageItemProps {
  message: Message;
  onEditMessage?: (id: string, content: string) => void;
}

export default function MessageItem({ message, onEditMessage }: MessageItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);
  const [reactions, setReactions] = useState<{[key: string]: number}>({});
  const { toast } = useToast();
  
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

  const addReaction = (type: string) => {
    setReactions(prev => ({
      ...prev,
      [type]: (prev[type] || 0) + 1
    }));
    
    toast({
      title: "Reação adicionada",
      description: `Você reagiu à mensagem de ${message.user.name}`,
    });
  };

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    
    if (editContent.trim() && onEditMessage) {
      onEditMessage(message.id, editContent);
      setIsEditing(false);
      
      toast({
        title: "Mensagem editada",
        description: "Sua mensagem foi atualizada com sucesso",
      });
    }
  };

  // Check if this message is from current user
  const userString = localStorage.getItem("furiaUser");
  const currentUser = userString ? JSON.parse(userString) : { name: "Anônimo" };
  const isOwnMessage = currentUser.name === message.user.name;

  return (
    <div className={`flex items-start gap-3 mb-4 animate-fade-in ${isOwnMessage ? 'flex-row-reverse' : ''}`}>
      <Avatar className="h-8 w-8 bg-furia-blue">
        <AvatarImage src={message.user.avatar} />
        <AvatarFallback className="bg-furia-blue text-furia-white text-xs">
          {getInitials(message.user.name)}
        </AvatarFallback>
      </Avatar>
      
      <div className={`flex-1 text-left ${isOwnMessage ? 'text-right' : ''}`}>
        <div className={`flex items-center gap-2 ${isOwnMessage ? 'justify-end' : ''}`}>
          <span className="font-medium">{message.user.name}</span>
          <span className="text-xs text-muted-foreground">{formatTime(message.timestamp)}</span>
          
          {isOwnMessage && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0" 
              onClick={handleEdit}
            >
              {isEditing ? <Check className="h-3 w-3" /> : <Pencil className="h-3 w-3" />}
            </Button>
          )}
        </div>
        
        {isEditing ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 text-sm bg-furia-gray border border-furia-blue rounded mt-1"
            rows={2}
          />
        ) : (
          <p className="text-sm mt-1 text-furia-white">{message.content}</p>
        )}
        
        {Object.keys(reactions).length > 0 && (
          <div className={`flex gap-1 mt-1 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            {Object.entries(reactions).map(([type, count]) => (
              <div key={type} className="bg-furia-gray px-2 py-0.5 rounded-full text-xs flex items-center">
                {type === 'like' && <ThumbsUp className="h-3 w-3 mr-1" />}
                {type === 'heart' && <Heart className="h-3 w-3 mr-1" />}
                {type === 'smile' && <Smile className="h-3 w-3 mr-1" />}
                {count}
              </div>
            ))}
          </div>
        )}
        
        {!isEditing && (
          <div className={`flex gap-1 mt-2 opacity-0 hover:opacity-100 transition-opacity ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            <Button variant="ghost" size="sm" className="h-6 p-1" onClick={() => addReaction('like')}>
              <ThumbsUp className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 p-1" onClick={() => addReaction('heart')}>
              <Heart className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 p-1" onClick={() => addReaction('smile')}>
              <Smile className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
