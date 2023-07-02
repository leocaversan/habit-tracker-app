import React, { useState } from "react";
import './index.css';
import Avatar from "../../Componentes/Avatar";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigator = useNavigate();
  const login = () => {
    navigator('/home');
  };
  const register = () => {
    navigator('/register');
  };
  const [user, setLogin] = useState('Usuario');
  const [password, setPassword] = useState('Senha');

  return (
    <div className="conteiner__login">

      <div className="conteiner__login-avatar">
        <Avatar />
      </div>
      <h1>Bem vindo ao Habit Tracker</h1>
      <div className='conteiner__login-input'>
        <input
          type="text"
          value={user}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className='conteiner__login-input'>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="conteiner__login-button">
        <button
          className='conteiner__login-button-login-habit'
          onClick={login}
        >
          login
        </button>
      </div>
      <p>OU</p>
      <button className='conteiner__login-button-continue-google'>
        <img src="https://img.freepik.com/icones-gratis/google_318-258888.jpg" alt="Google" />
        <p>
          Continuar com o Google
        </p>
      </button>
      <div className="conteiner__login-forgot">
        <p>
          Esqueceu a senha?
        </p>
        <div className="conteiner__login-forgot-button-create">
          <p>
            Não tem uma conta?
          </p>
          <button 
          onClick={register}>
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;