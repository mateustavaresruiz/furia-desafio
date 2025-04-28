
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/toast";

interface AuthFormProps {
  isLogin?: boolean;
}

export default function AuthForm({ isLogin = false }: AuthFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        // Simulação de login
        if (email && password) {
          localStorage.setItem("furiaUser", JSON.stringify({ email, name: "Fã da Furia" }));
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo de volta.",
          });
          navigate("/chat");
        } else {
          throw new Error("Preencha todos os campos");
        }
      } else {
        // Simulação de cadastro
        if (name && email && password) {
          localStorage.setItem("furiaUser", JSON.stringify({ email, name }));
          toast({
            title: "Cadastro realizado com sucesso!",
            description: "Bem-vindo à comunidade FURIA.",
          });
          navigate("/chat");
        } else {
          throw new Error("Preencha todos os campos");
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{isLogin ? "Login" : "Cadastro"}</h1>
        <p className="text-sm text-muted-foreground">
          {isLogin
            ? "Entre para conversar com outros fãs"
            : "Crie uma conta para participar do chat"}
        </p>
      </div>

      {!isLogin && (
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-furia-gray border-furia-gray text-furia-white"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-furia-gray border-furia-gray text-furia-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-furia-gray border-furia-gray text-furia-white"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-furia-blue hover:bg-blue-600 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Processando..." : isLogin ? "Entrar" : "Cadastrar"}
      </Button>

      <div className="text-center">
        <Button
          variant="link"
          onClick={() => navigate(isLogin ? "/register" : "/login")}
          className="text-furia-blue"
        >
          {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Faça login"}
        </Button>
      </div>
    </form>
  );
}
