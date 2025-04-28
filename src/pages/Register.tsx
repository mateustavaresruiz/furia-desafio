
import AuthForm from "@/components/auth/AuthForm";
import Header from "@/components/layout/Header";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <AuthForm isLogin={false} />
      </main>
    </div>
  );
};

export default Register;
