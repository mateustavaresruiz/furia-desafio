
import { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";
import { useToast } from "@/components/ui/toast";

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
    
    toast({
      title: "Conectado ao chat",
      description: "Você está agora conectado ao chat em tempo real",
    });
  }, []);

  // Rolagem automática para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

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
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-furia-black border border-furia-gray rounded-lg overflow-hidden">
      <div className="p-4 bg-furia-gray">
        <h2 className="text-lg font-semibold">Chat FURIA</h2>
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"} mr-2`}></div>
          <span className="text-sm text-muted-foreground">
            {isConnected ? "Conectado" : "Desconectado"}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <MessageInput onSendMessage={handleSendMessage} disabled={!isConnected} />
    </div>
  );
}
