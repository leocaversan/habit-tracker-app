import React, { useState } from "react";
import './index.css'
import Notifications from "../../Componentes/Notifications";
import CreateHabit from "../../Componentes/CreateHabit";
import ViewHabit from "../../Componentes/ViewHabit";

const Home = () => {

    const [viewHabit, setViewHabitVisible] = useState(true);
    const [notification, setnotificationVisible] = useState(false);
    const [createdHabit, setcreatedHabitVisible] = useState(false);

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
                    <button>
                        <img src="" alt="" />
                        <p>
                            Sair
                        </p>
                    </button>
                </div>
            </div>
            <div className="conteiner__home-vertical-line"></div>
            <div className="conteiner__home-right">
                {viewHabit &&
                    (
                        <ViewHabit />
                    )
                }
                {notification &&
                    (
                        <Notifications />
                    )
                }
                {createdHabit &&
                    (
                        <CreateHabit />
                    )
                }
            </div>
        </div>
    )
}

export default Home;