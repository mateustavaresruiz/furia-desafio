
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import { MessageSquare, Calendar, Users, ChevronRight, Trophy, Clock, Shield, Gamepad2, Star } from "lucide-react";

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
        
        {/* Nova seção de conquistas recentes */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-furia-gray/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-8 inline-block relative after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-furia-blue after:bottom-[-10px] after:left-1/3">
                Conquistas Recentes
              </h2>
              <p className="max-w-2xl mx-auto text-furia-white/80">
                Acompanhe as vitórias e conquistas mais recentes da FURIA em torneios pelo mundo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Conquista 1 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-furia-blue/20 hover:border-furia-blue/40 transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-furia-blue/10 flex items-center justify-center mr-4">
                    <Trophy className="text-furia-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-furia-blue">ESL Pro League Season 18</h3>
                    <p className="text-xs text-furia-white/60">Dez 2024</p>
                  </div>
                </div>
                <p className="text-sm text-furia-white/80 text-left">Top 4 na competição internacional, superando equipes de elite como Vitality e G2.</p>
              </div>
              
              {/* Conquista 2 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-furia-blue/20 hover:border-furia-blue/40 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <div className="flex items-center mb-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-furia-blue/10 flex items-center justify-center mr-4">
                    <Star className="text-furia-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-furia-blue">IEM Rio 2024</h3>
                    <p className="text-xs text-furia-white/60">Nov 2024</p>
                  </div>
                </div>
                <p className="text-sm text-furia-white/80 text-left">Campeões em casa com uma performance incrível diante da torcida brasileira.</p>
              </div>
              
              {/* Conquista 3 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-furia-blue/20 hover:border-furia-blue/40 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <div className="flex items-center mb-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-furia-blue/10 flex items-center justify-center mr-4">
                    <Shield className="text-furia-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-furia-blue">BLAST Premier</h3>
                    <p className="text-xs text-furia-white/60">Out 2024</p>
                  </div>
                </div>
                <p className="text-sm text-furia-white/80 text-left">Vice-campeões após uma campanha memorável chegando até a grande final.</p>
              </div>
              
              {/* Conquista 4 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-furia-blue/20 hover:border-furia-blue/40 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="flex items-center mb-4 text-left">
                  <div className="w-12 h-12 rounded-full bg-furia-blue/10 flex items-center justify-center mr-4">
                    <Gamepad2 className="text-furia-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-furia-blue">Campeonato Brasileiro</h3>
                    <p className="text-xs text-furia-white/60">Set 2024</p>
                  </div>
                </div>
                <p className="text-sm text-furia-white/80 text-left">Tricampeões brasileiros com domínio absoluto no cenário nacional de CS2.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nova seção de estatísticas */}
        <section className="py-16 px-4 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-8 inline-block relative after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-furia-blue after:bottom-[-10px] after:left-1/3">
                FURIA em números
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-furia-blue/20 flex items-center justify-center mx-auto mb-3">
                  <Trophy className="text-furia-blue" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 text-furia-white">27</div>
                <p className="text-sm text-furia-white/70">Títulos Conquistados</p>
              </div>
              
              <div className="text-center p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <div className="w-16 h-16 rounded-full bg-furia-blue/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="text-furia-blue" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 text-furia-white">850K+</div>
                <p className="text-sm text-furia-white/70">Seguidores</p>
              </div>
              
              <div className="text-center p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <div className="w-16 h-16 rounded-full bg-furia-blue/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-furia-blue" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 text-furia-white">8</div>
                <p className="text-sm text-furia-white/70">Anos de história</p>
              </div>
              
              <div className="text-center p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="w-16 h-16 rounded-full bg-furia-blue/20 flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="text-furia-blue" size={28} />
                </div>
                <div className="text-4xl font-bold mb-1 text-furia-white">12M+</div>
                <p className="text-sm text-furia-white/70">Mensagens no chat</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={() => navigate("/register")} 
                size="lg" 
                className="bg-furia-blue hover:bg-blue-600 hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-furia-blue/20"
              >
                Faça parte dessa história
              </Button>
            </div>
          </div>
        </section>
        
        {/* Seção de depoimentos/testemunhos */}
        <section className="py-16 px-4 bg-gradient-to-t from-black to-furia-gray/20">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-8 inline-block relative after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-furia-blue after:bottom-[-10px] after:left-1/3">
                O que dizem nossos usuários
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Depoimento 1 */}
              <div className="bg-black/40 p-6 rounded-lg border border-furia-gray/30 backdrop-blur-sm relative animate-fade-in">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-furia-blue flex items-center justify-center">
                  <span className="text-2xl">"</span>
                </div>
                <p className="text-furia-white/80 italic mb-4 text-left">
                  "O FURIA Chat mudou a forma como eu assisto aos jogos. Poder conversar com outros fãs em tempo real torna tudo muito mais emocionante!"
                </p>
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-furia-blue/30 flex items-center justify-center mr-3">
                    <span className="font-semibold text-sm">RV</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-furia-blue">Ricardo Viana</h4>
                    <p className="text-xs text-furia-white/60">Usuário desde 2024</p>
                  </div>
                </div>
              </div>
              
              {/* Depoimento 2 */}
              <div className="bg-black/40 p-6 rounded-lg border border-furia-gray/30 backdrop-blur-sm relative animate-fade-in" style={{animationDelay: "0.1s"}}>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-furia-blue flex items-center justify-center">
                  <span className="text-2xl">"</span>
                </div>
                <p className="text-furia-white/80 italic mb-4 text-left">
                  "A comunidade no FURIA Chat é incrível. Fiz vários amigos e sempre trocamos ideias sobre estratégias e jogadas dos nossos jogadores favoritos."
                </p>
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-furia-blue/30 flex items-center justify-center mr-3">
                    <span className="font-semibold text-sm">AM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-furia-blue">Amanda Martins</h4>
                    <p className="text-xs text-furia-white/60">Usuária desde 2023</p>
                  </div>
                </div>
              </div>
              
              {/* Depoimento 3 */}
              <div className="bg-black/40 p-6 rounded-lg border border-furia-gray/30 backdrop-blur-sm relative animate-fade-in" style={{animationDelay: "0.2s"}}>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-furia-blue flex items-center justify-center">
                  <span className="text-2xl">"</span>
                </div>
                <p className="text-furia-white/80 italic mb-4 text-left">
                  "O calendário de jogos atualizado me ajuda a nunca perder uma partida da FURIA, e ainda posso discutir as táticas com outros fãs no chat!"
                </p>
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 rounded-full bg-furia-blue/30 flex items-center justify-center mr-3">
                    <span className="font-semibold text-sm">LS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-furia-blue">Lucas Silva</h4>
                    <p className="text-xs text-furia-white/60">Usuário desde 2024</p>
                  </div>
                </div>
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
