
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import FuriaLogo from "@/components/ui/FuriaLogo";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto flex flex-col items-center text-center">
            <FuriaLogo className="h-24 w-24 mb-6" />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bem-vindo ao <span className="text-furia-blue">FURIA Chat</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl">
              Conecte-se com outros fãs e acompanhe os jogos da FURIA em tempo real.
              Junte-se à comunidade mais apaixonada de CS2 no Brasil!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate("/register")} 
                size="lg" 
                className="bg-furia-blue hover:bg-blue-600 text-lg px-8"
              >
                Começar agora
              </Button>
              
              <Button 
                onClick={() => navigate("/login")} 
                variant="outline" 
                size="lg" 
                className="border-furia-blue text-furia-blue hover:bg-furia-blue hover:text-furia-white text-lg px-8"
              >
                Já tenho uma conta
              </Button>
            </div>
          </div>
        </section>
        
        <section className="bg-furia-gray py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">O que oferecemos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-furia-blue">Chat em tempo real</h3>
                <p>Converse com outros fãs durante os jogos e compartilhe suas reações.</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-furia-blue">Calendário de jogos</h3>
                <p>Fique por dentro dos próximos confrontos do FURIA em diversas competições.</p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-furia-blue">Comunidade de fãs</h3>
                <p>Faça parte de uma comunidade apaixonada que vive o espírito do CS2.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-furia-gray py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            FURIA Chat © 2025. Este não é um site oficial da FURIA Esports.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
