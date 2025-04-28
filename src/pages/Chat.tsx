
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import ChatBox from "@/components/chat/ChatBox";
import MatchList from "@/components/matches/MatchList";
import { useToast } from "@/components/ui/toast";

const Chat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChatBox />
          </div>
          
          <div>
            <MatchList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
