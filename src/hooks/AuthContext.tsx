import React, { createContext, useContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

// Define a interface para o contexto de autenticação
interface AuthContextType {
  token: string | null;
  login: (emailAndPassword: { email: string; password: string } | string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Defina o tipo para as propriedades do AuthProvider
interface AuthProviderProps {
  children: ReactNode; // Use ReactNode em vez de {} para children
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const hardcodedEmail = process.env.REACT_APP_HARDCODED_EMAIL || "seu_email";
  const hardcodedPassword = process.env.REACT_APP_HARDCODED_PASSWORD || "sua_senha";
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const login = (emailAndPassword: { email: string; password: string } | string) => {
    if (typeof emailAndPassword === "string") {
      // Tratamento para login com token
      setToken(emailAndPassword);
      localStorage.setItem("token", emailAndPassword);
    } else {
      // Tratamento para login com credenciais de usuário e senha
      const { email, password } = emailAndPassword;
      if (email === hardcodedEmail && password === hardcodedPassword) {
        const fakeToken = "seu_token_gerado_localmente";
        setToken(fakeToken);
        localStorage.setItem("token", fakeToken);
      } else {
        console.log("Credenciais inválidas");
        toast.error("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const authContextValue = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
