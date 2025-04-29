
import { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Message {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: Date;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Simulação de mensagens iniciais
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        id: "1",
        user: { name: "Admin Furia" },
        content: "Bem-vindo ao chat da FURIA! Respeite os outros usuários.",
        timestamp: new Date(Date.now() - 3600000),
      },
      {
        id: "2",
        user: { name: "arT" },
        content: "Salve galera! Vamos com tudo pro próximo jogo!",
        timestamp: new Date(Date.now() - 1800000),
      },
      {
        id: "3",
        user: { name: "KSCERATO" },
        content: "Estamos treinando bastante, próximo jogo vai ser difícil mas estamos preparados!",
        timestamp: new Date(Date.now() - 900000),
      },
    ];
    
    setMessages(initialMessages);
    setIsConnected(true);
    
    // Simulação de usuários online
    setOnlineUsers(["Admin Furia", "arT", "KSCERATO", "Anônimo"]);
    
    toast({
      title: "Conectado ao chat",
      description: "Você está agora conectado ao chat em tempo real",
    });

    // Simulação de outros usuários entrando
    const timer = setTimeout(() => {
      setOnlineUsers(prev => [...prev, "fallen"]);
      toast({
        title: "Usuário conectado",
        description: "fallen entrou no chat",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Rolagem automática para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Simulação de digitação de outros usuários
    setTypingUsers([]);

    // Pegando usuário do localStorage
    const userString = localStorage.getItem("furiaUser");
    let user = { name: "Anônimo" };
    
    if (userString) {
      user = JSON.parse(userString);
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      user: { name: user.name },
      content,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    
    // Simulação de resposta após alguns segundos
    if (Math.random() > 0.5) {
      setTimeout(() => {
        setTypingUsers(["KSCERATO"]);
        
        setTimeout(() => {
          const responder = Math.random() > 0.5 ? "KSCERATO" : "arT";
          setTypingUsers([]);
          
          const responses = [
            "Com certeza!",
            "Concordo com você!",
            "Vamos FURIA!",
            "Isso aí, bora ganhar!",
            "Sem dúvida, estamos preparados."
          ];
          
          const responseMessage: Message = {
            id: Date.now().toString(),
            user: { name: responder },
            content: responses[Math.floor(Math.random() * responses.length)],
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, responseMessage]);
        }, 3000);
      }, 1500);
    }
  };

  const handleTypingStart = () => {
    // Pegando usuário do localStorage
    const userString = localStorage.getItem("furiaUser");
    let user = { name: "Anônimo" };
    
    if (userString) {
      user = JSON.parse(userString);
    }
    
    // Não incluir o usuário atual na lista de digitação
    if (!typingUsers.includes(user.name)) {
      // Simulação apenas para outros usuários
    }
  };
  
  const handleEditMessage = (id: string, newContent: string) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => 
        msg.id === id ? { ...msg, content: newContent } : msg
      )
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-furia-black border border-furia-gray rounded-lg overflow-hidden">
      <div className="p-4 bg-furia-gray text-left">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chat FURIA</h2>
          <div className="text-sm text-white">
            <span>{onlineUsers.length} online</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"} mr-2`}></div>
          <span className="text-sm text-muted-foreground">
            {isConnected ? "Conectado" : "Desconectado"}
          </span>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <MessageItem 
            key={message.id} 
            message={message} 
            onEditMessage={handleEditMessage}
          />
        ))}
        
        {typingUsers.length > 0 && (
          <div className="text-sm text-gray-400 animate-pulse ml-11 mb-2">
            {typingUsers.join(", ")} {typingUsers.length === 1 ? "está" : "estão"} digitando...
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </ScrollArea>
      
      <div className="bg-furia-gray text-sm text-white p-2 border-t border-furia-blue">
        <div className="flex flex-wrap gap-1">
          {onlineUsers.map(user => (
            <div key={user} className="flex items-center bg-furia-black px-2 py-0.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
              {user}
            </div>
          ))}
        </div>
      </div>
      
      <MessageInput 
        onSendMessage={handleSendMessage} 
        onTypingStart={handleTypingStart}
        disabled={!isConnected} 
      />
    </div>
  );
}
