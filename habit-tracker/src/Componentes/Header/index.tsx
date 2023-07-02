import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className='conteiner__header'>
            <div className='conteiner__icon'>
                <Avatar/>
                <div>
                    <p>
                        Habit Tracker
                    </p>
                </div>
            </div>
            <div className='conteiner__icon'>
                <div className='conteiner__header-about'>
                    <p>
                        About
                    </p>
                </div>
                <div className='conteiner__header-button'>
                    <button onClick={() => {
                        navigator("/login");
                    }}>
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );

};
export default Header;