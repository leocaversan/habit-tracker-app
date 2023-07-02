import React from "react";
import "./index.css";
import Header from "../../Componentes/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="conteiner">
      <div className="header">
        <Header />
      </div>
      <div className="conteiner__body">
        <h1>Bem vindo</h1>

        <button onClick={() => {
          navigate('/register')
        }}>
          Cadastrar
        </button>

      </div>
    </div>
  );
};

export default Home;
