import { useState } from "react";
import style from "./Login.module.css";
import Avatar from "../../Componentes/Avatar";
import { useNavigate } from "react-router-dom";

// import { AuthContext } from "../../contexts/auth";
import { validUser } from "../../services/api";
import { useUserContext } from '../../contexts/auth';
import { UserValidate } from "../../Props/props";

const Login = () => {

  const navigator = useNavigate();

  const [userValidate, setUserValidate] = useState<UserValidate>()

  // const contextData = useContext(AuthContext);
  const { login } = useUserContext();
  const verifyLogin = async () => {

    const userData = await validUser(username, password);
    if (userData != null) {

      setUserValidate(userData)
      login(userData);
      navigator('/home');
    } else {
      setSpanUserInvalidVisible(true)
    }
  }
  const register = () => { navigator('/register'); };
  const [spanVisibleIUserInvalid, setSpanUserInvalidVisible] = useState(false);
  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={style.conteiner__login}>

      <div className={style.conteiner__login_avatar}>
        <Avatar />
      </div>
      <h1> Welcome </h1>
      <h1> To Habit Tracker </h1>
      <div className={style.conteiner__login_input}>
        <input
          type="text"
          value={username}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className={style.conteiner__login_input}>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={style.conteiner__login_button}>
        <button
          className={style.conteiner__login_button_login_habit}
          onClick={verifyLogin}>
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
      <button className={style.conteiner__login_button_continue_google}>
        <img
          src="https://img.freepik.com/icones-gratis/google_318-258888.jpg"
          alt="Google" />
        <p>
          Continuar com o Google
        </p>
      </button>
      <div className={style.conteiner__login_forgot}>
        <p>
          Esqueceu a senha?
        </p>
        <div className={style.conteiner__login_forgot_button_create}>
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