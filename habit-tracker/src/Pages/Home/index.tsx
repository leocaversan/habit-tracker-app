import React, { useEffect, useState } from "react";
import './index.css'
import Notifications from "../../Componentes/Notifications";
import CreateHabit from "../../Componentes/CreateHabit";
import ViewHabit from "../../Componentes/ViewHabit";

import { useUserContext } from '../../contexts/auth';
import Login from "../Login";


const Home = () => {

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUserMemory(JSON.parse(savedUser));
            console.log(userMemory);
        }
        else {
            window.location.href = '/login';
        }

    }, []);

    const backPageClick = () => {
        logout();
        window.history.back();
    }

    const { user, logout } = useUserContext();
    const [viewHabit, setViewHabitVisible] = useState(true);
    const [notification, setnotificationVisible] = useState(false);
    const [createdHabit, setcreatedHabitVisible] = useState(false);
    const [userMemory, setUserMemory] = useState(user);

    return (
        <div className="conteiner__home">
            <div className="conteiner__home-left">
                <div className="conteiner__home-left-options">
                    <button
                        onClick={
                            () => {
                                setViewHabitVisible(true)
                                setnotificationVisible(false)
                                setcreatedHabitVisible(false)
                            }
                        }
                    >
                        <p>
                            Habit Tracker
                        </p>
                    </button>
                </div>
                <div className="conteiner__home-left-options">
                    <button
                        onClick={
                            () => {
                                setViewHabitVisible(false)
                                setnotificationVisible(true)
                                setcreatedHabitVisible(true)
                            }
                        }
                    >
                        <img src="" alt="" />
                        <p>
                            Notificacoes
                        </p>
                    </button>
                </div>
                <div className="conteiner__home-left-options">
                    <button
                        onClick={
                            () => {
                                setViewHabitVisible(false)
                                setnotificationVisible(false)
                                setcreatedHabitVisible(true)
                            }
                        }
                    >
                        <img src="" alt="" />
                        <p>
                            Criar Habito
                        </p>
                    </button>
                </div>
                <div className="conteiner__home-left-options">
                    <button>
                        <img src="" alt="" />
                        <p>
                            Perfil
                        </p>
                    </button>
                </div>
                <div className="conteiner__home-left-options">
                    <button
                        onClick={
                            backPageClick
                        }
                    >
                        <img src="" alt="" />
                        <p>
                            Sair
                        </p>
                    </button>
                </div>
            </div>
            <div className="conteiner__home-vertical-line"></div>
            <div className="conteiner__home-right">
                <div className='conteiner__createHabit-button-back'>
                    <button onClick={
                        backPageClick
                    }>
                        <img
                            src="https://images.vexels.com/media/users/3/189738/isolated/preview/e531a6d28931f7c224be0c595c5f5cf1-seta-para-a-esquerda-do-graffiti.png"
                            alt="voltar"
                        />
                    </button>
                </div>
                {viewHabit &&
                    (
                        <ViewHabit userId={userMemory?.user.username} />
                    )
                }
                {notification &&
                    (
                        <Notifications />
                    )
                }
                {createdHabit &&
                    (
                        <CreateHabit userId={userMemory?.user.username} />
                    )
                }
            </div>
        </div>
    )
}

export default Home;