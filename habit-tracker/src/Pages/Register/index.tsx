import React, { useState } from 'react';
import Avatar from '../../Componentes/Avatar';
import './index.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Register = () => {

    const createdUser = async () => {

        await axios.request({
          method: 'POST',
          url: 'http://localhost:4000/users',
          data: {
            "username": user,
            "password": password,
          }
        }).then(response => {
          if (response.data.username != null) {
            navigator('/login'); 
            console.log(response);
          } else {
            console.log(response);
          }
        }).catch(error => {
          console.log(error);
        })
      } 

    const [user, setLogin] = useState('Usuario');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Senha');
    const navigator = useNavigate();

    return (
        <div className='conteiner__register'>
            <div className='conteiner__register-avatar'>
                <Avatar />
            </div>
            <div className='conteiner__register-text'>
                <h1>
                    Bem-vindo(a) ao Habbbit Tracker
                </h1>
                <p>
                    Comece a criar habitos
                </p>
            </div>
            <div className='conteiner__register-input'>
                <div className='conteiner__register-input'>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className='conteiner__register-input'>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='conteiner__register-input'>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='conteiner__register-button'>
                <button
                    className='conteiner__register-button-created-habit'
                    onClick={createdUser}
                >
                    CRIAR USER
                </button>
                <button className='conteiner__register-button-continue-google'>
                    <img src="https://img.freepik.com/icones-gratis/google_318-258888.jpg" alt="Google" />
                    <p>
                        Continuar com o Google
                    </p>
                </button>
            </div>
            <div className='conteiner__register-continue-google'>
            </div>
        </div>
    )
}

export default Register;