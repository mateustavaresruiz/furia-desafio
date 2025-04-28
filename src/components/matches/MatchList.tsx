
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, RefreshCw } from "lucide-react";

interface Match {
  id: string;
  tournament: string;
  opponent: string;
  date: string;
  time: string;
}

export default function MatchList() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Função para buscar jogos (simulada)
  const fetchMatches = async () => {
    setLoading(true);
    
    // Simulação de chamada de API
    setTimeout(() => {
      const mockMatches: Match[] = [
        {
          id: "1",
          tournament: "ESL Pro League Season 19",
          opponent: "NAVI",
          date: "2025-05-02",
          time: "15:30",
        },
        {
          id: "2",
          tournament: "BLAST Premier Spring Finals",
          opponent: "Team Liquid",
          date: "2025-05-05",
          time: "18:00",
        },
        {
          id: "3",
          tournament: "IEM Dallas 2025",
          opponent: "G2 Esports",
          date: "2025-05-10",
          time: "12:00",
        },
      ];
      
      setMatches(mockMatches);
      setLoading(false);
      
      toast({
        title: "Jogos atualizados",
        description: `${mockMatches.length} próximos jogos carregados`,
      });
    }, 800);
  };

  // Carregar jogos na montagem do componente
  useEffect(() => {
    fetchMatches();
  }, []);

  // Formatar data para exibição
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: "numeric", 
      month: "long" 
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  // Abrir HLTV em nova aba
  const openHLTV = () => {
    window.open("https://www.hltv.org/team/8297/furia#tab-matchesBox", "_blank");
  };

  return (
    <Card className="bg-furia-gray border-furia-gray">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Próximos Jogos</CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={fetchMatches} 
          disabled={loading}
          className="text-furia-white hover:text-furia-blue"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {matches.length === 0 && !loading ? (
          <p className="text-center py-4 text-muted-foreground">
            Nenhum jogo agendado no momento.
          </p>
        ) : (
          matches.map((match) => (
            <div key={match.id} className="animate-fade-in">
              <div className="mb-2">
                <h3 className="font-semibold text-furia-blue">{match.tournament}</h3>
                <p className="text-sm">vs {match.opponent}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(match.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{match.time}</span>
                  </div>
                </div>
              </div>
              <Separator className="my-3 bg-furia-black/20" />
            </div>
          ))
        )}
        
        {loading && (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">Carregando jogos...</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={openHLTV} 
          variant="outline" 
          className="w-full border-furia-blue text-furia-blue hover:bg-furia-blue hover:text-furia-white"
        >
          Ver todos os jogos
        </Button>
      </CardFooter>
    </Card>
  );
}
