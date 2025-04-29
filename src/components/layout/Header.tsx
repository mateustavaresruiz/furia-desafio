
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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
    <header className="border-b border-furia-gray">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <span className="font-bold text-xl">FURIA Chat</span>
        </div>

        <nav className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button
                variant="link"
                onClick={() => navigate("/chat")}
                className="text-furia-white hover:text-furia-blue"
              >
                Chat
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-furia-blue text-furia-blue hover:bg-furia-blue hover:text-furia-white"
              >
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="link"
                onClick={() => navigate("/login")}
                className="text-furia-white hover:text-furia-blue"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="bg-furia-blue hover:bg-blue-600"
              >
                Cadastrar
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
