import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/AuthContext";
import Preloader from "./Preloader";
import "./preloader.css";

const Logout = () => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(true); // Estado para controlar o processo de logout

  useEffect(() => {
    const logout = async () => {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      try {
        const response = await fetch("http://choperita.ddns.net/api/logout", options);
        const data = await response.json();

        // Verifique a resposta para garantir que o logout foi bem-sucedido
        if ((data && data.message === "Logged out") || data.message === "Unauthenticated.") {
          // Redirecione o usuário para a página de login
          navigate("/login");
        } else {
          console.error("Erro ao fazer logout");
        }
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
      } finally {
        // Marque o logout como concluído
        setLoggingOut(false);
      }
    };

    logout();
  }, [navigate]);

  return <div>{loggingOut ? <Preloader /> : <h1>Logout</h1>}</div>;
};

export default Logout;
