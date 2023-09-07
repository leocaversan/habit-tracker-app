import React from "react";
import style from "./Notifications.module.css";

const Notifications = () => {
    return (
        <div className={style.conteiner__notifications}>
            <div className={style.conteiner__notifications_options}>
                <h1>
                    Notificacoes
                </h1>
            </div>
            <div className={style.conteiner__notifications_content}>
                <div className={style.conteiner__notifications_header}>
                    <h1>Hoje</h1>
                </div>
                <div className={style.conteiner__notifications_body}>
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