import React from "react";
import './index.css'
import Notifications from "../../Componentes/Notifications";
import CreateHabit from "../../Componentes/CreateHabit";
import ViewHabit from "../../Componentes/ViewHabit";

const Home = () => {
    return (
        <div className="conteiner__home">
            <div className="conteiner__home-left">
                <div className="conteiner__home-left-options">
                    <button>
                        <p>
                            Habit Tracker
                        </p>
                    </button>
                </div>
                <div className="conteiner__home-left-options">
                    <button>
                        <img src="" alt="" />
                        <p>
                            Notificacoes
                        </p>
                    </button>
                </div>
                <div className="conteiner__home-left-options">
                    <button>
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
                <CreateHabit/>
            </div>
        </div>
    )
}

export default Home;