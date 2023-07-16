import React, { useState, useContext } from "react";
import './index.css';
import Avatar from "../../Componentes/Avatar";
import { useNavigate } from "react-router-dom";

// import { AuthContext } from "../../contexts/auth";
import { validUser } from "../../services/api";
import { useUserContext } from '../../contexts/auth';

interface UserValidate {
  "user": {
    "id": string,
    "username": string,
  },
  "token": string,
}


const Login = () => {

  const navigator = useNavigate();

  const [userValidate, setUserValidate] = useState<UserValidate>()

  // const contextData = useContext(AuthContext);
  const { user, login } = useUserContext();
  const verifyLogin = async () => {
    
    const userData = await validUser(username, password);
    if (userData != null) {
      
      setUserValidate(userData)
      login(userData);
      // contextData?.updateContext(userValidate);
      navigator('/home');

    } else {
      setSpanUserInvalidVisible(true)
    }
  }
  
  // const contextData = useContext(userValidate);
  // console.log(contextData);

  const register = () => {
    navigator('/register');
  };

  const [spanVisibleIUserInvalid, setSpanUserInvalidVisible] = useState(false);
  const [username, setLogin] = useState('');
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
          value={username}
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