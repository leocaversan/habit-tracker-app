import React from "react";
import './index.css';

const Notifications = () => {
    return (
        <div className="conteiner__notifications">
            <div className="conteiner__notifications-options">
                <h1>
                    Notificacoes
                </h1>
            </div>
            <div className="conteiner__notifications-content">
                <div className="conteiner__notifications-header">
                    <h1>Hoje</h1>
                </div>
                <div className="conteiner__notifications-body">
                    <li>
                        Andar de bicicleta
                    </li>
                    <li>
                        Estudar React
                    </li>
                    <li>
                        Prova ingles
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Notifications;