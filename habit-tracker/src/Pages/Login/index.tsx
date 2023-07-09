import React, { useState } from "react";
import './index.css';
import Avatar from "../../Componentes/Avatar";
import { useNavigate } from "react-router-dom";

import axios from 'axios';


const Login = () => {


  const verifyLogin = async () => {

    await axios.request({
      method: 'POST',
      url: 'http://localhost:4000/sessions',
      data: {
        "username": user,
        "password": password,
      }
    }).then(response => {
      if (response.status === 200) {
        navigator('/home');
        console.log(response.data.token);
      } else if (response.status !== 200) {
        console.log('userInvalid');
      }
    }).catch(error => {
      setSpanUserInvalidVisible(true)
      console.log(error);
    })
  }

  const navigator = useNavigate();

  const register = () => {
    navigator('/register');
  };
  const [spanVisibleIUserInvalid, setSpanUserInvalidVisible] = useState(false);
  const [user, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
          onClick={verifyLogin}
        >
          login
        </button>

        {spanVisibleIUserInvalid &&
          (
            <span onClick={() => setSpanUserInvalidVisible(false)} className="conteiner__login-button-login-habit-invalid">
              Usuário ou senha inválidos
            </span>
          )}



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