
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import { MessageSquare, Calendar, Users, ChevronRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
          <div className="container mx-auto flex flex-col items-center text-center relative z-10">            
            <div className="w-16 h-16 rounded-full bg-furia-blue animate-pulse mb-6 opacity-75 shadow-lg shadow-furia-blue/50"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Bem-vindo ao <span className="text-gradient-blue">FURIA Chat</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl animate-fade-in opacity-85">
              Conecte-se com outros fãs e acompanhe os jogos da FURIA em tempo real.
              Junte-se à comunidade mais apaixonada de CS2 no Brasil!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                onClick={() => navigate("/register")} 
                size="lg" 
                className="bg-furia-blue hover:bg-blue-600 text-lg px-8 hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-furia-blue/20 group"
              >
                Começar agora
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => navigate("/login")} 
                variant="outline" 
                size="lg" 
                className="border-furia-blue text-furia-blue hover:bg-furia-blue hover:text-furia-white text-lg px-8 transition-all duration-300"
              >
                Já tenho uma conta
              </Button>
            </div>
          </div>
        </section>
        
        <section className="bg-furia-gray py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-8 inline-block relative after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-furia-blue after:bottom-[-10px] after:left-1/3">O que oferecemos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-furia-gray/30 hover:border-furia-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-furia-blue/10 hover:translate-y-[-5px] group">
                <div className="w-14 h-14 rounded-full bg-furia-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-furia-blue/20 transition-colors duration-300">
                  <MessageSquare className="text-furia-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-furia-blue">Chat em tempo real</h3>
                <p className="text-furia-white/80">Converse com outros fãs durante os jogos e compartilhe suas reações.</p>
              </div>
              
              <div className="p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-furia-gray/30 hover:border-furia-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-furia-blue/10 hover:translate-y-[-5px] group">
                <div className="w-14 h-14 rounded-full bg-furia-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-furia-blue/20 transition-colors duration-300">
                  <Calendar className="text-furia-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-furia-blue">Calendário de jogos</h3>
                <p className="text-furia-white/80">Fique por dentro dos próximos confrontos do FURIA em diversas competições.</p>
              </div>
              
              <div className="p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-furia-gray/30 hover:border-furia-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-furia-blue/10 hover:translate-y-[-5px] group">
                <div className="w-14 h-14 rounded-full bg-furia-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-furia-blue/20 transition-colors duration-300">
                  <Users className="text-furia-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-furia-blue">Comunidade de fãs</h3>
                <p className="text-furia-white/80">Faça parte de uma comunidade apaixonada que vive o espírito do CS2.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-furia-gray/50 py-8 px-4 backdrop-blur-md bg-black/70">
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
