import React, { useState } from 'react';
import Avatar from '../../Componentes/Avatar';
import './index.css';
import { useNavigate } from "react-router-dom";
import { createdUser } from '../../services/api';

import axios from 'axios';

const Register = () => {

    const validatedCrestedUser = async () => {
        const valid = await createdUser(user, password);
        if (valid) {
            navigator('/login');
        } else {
            setInvalidPassword(true);
        }
    }


    const [user, setLogin] = useState('Usuario');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Senha');
    const [invalidPassword, setInvalidPassword] = useState(false);
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
                    onClick={validatedCrestedUser}
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

            {invalidPassword && (
                <div className='invalidPassword' onClick={()=>setInvalidPassword(false)}>
                    <h1>
                        User exists
                    </h1>
                </div>
            )}



        </div>
    )
}

export default Register;