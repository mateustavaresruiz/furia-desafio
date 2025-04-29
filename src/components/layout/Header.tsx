
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, LogOut, LogIn, UserPlus } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isLoggedIn = localStorage.getItem("furiaUser") !== null;

  const handleLogout = () => {
    localStorage.removeItem("furiaUser");
    toast({
      title: "Desconectado",
      description: "Você foi desconectado com sucesso",
    });
    navigate("/login");
  };

  return (
    <header className="backdrop-blur-md bg-black/70 border-b border-furia-gray/50 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate("/")}>
          <span className="font-bold text-xl text-furia-blue">FURIA Chat</span>
        </div>

        <nav className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button
                variant="link"
                onClick={() => navigate("/chat")}
                className="text-furia-white hover:text-furia-blue transition-colors flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Chat
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-furia-blue text-furia-blue hover:bg-furia-blue hover:text-furia-white transition-all duration-300 flex items-center gap-2"
              >
                <LogOut size={18} />
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="link"
                onClick={() => navigate("/login")}
                className="text-furia-white hover:text-furia-blue transition-colors flex items-center gap-2"
              >
                <LogIn size={18} />
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="bg-furia-blue hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-furia-blue/20"
              >
                <UserPlus size={18} />
                Cadastrar
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
