
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import ChatBox from "@/components/chat/ChatBox";
import MatchList from "@/components/matches/MatchList";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Chat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Monitor window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Verificar se o usuário está logado
  useEffect(() => {
    const user = localStorage.getItem("furiaUser");
    
    if (!user) {
      toast({
        title: "Acesso restrito",
        description: "Você precisa estar logado para acessar o chat",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-furia-gray">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 animate-fade-in">
        {isMobile ? (
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="chat" className="flex-1">Chat</TabsTrigger>
              <TabsTrigger value="matches" className="flex-1">Próximos Jogos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="mt-0">
              <ChatBox />
            </TabsContent>
            
            <TabsContent value="matches" className="mt-0">
              <MatchList />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChatBox />
            </div>
            
            <div>
              <MatchList />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Chat;
