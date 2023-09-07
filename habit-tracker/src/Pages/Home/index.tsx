import { useEffect, useState } from "react";
import style from "./Home.module.css";
import Notifications from "../../Componentes/Notifications";
import CreateHabit from "../../Componentes/CreateHabbit";
import ViewHabit from "../../Componentes/ViewHabbit";

import { useUserContext } from '../../contexts/auth';


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

    const { user, logout } = useUserContext();
    const [viewHabit, setViewHabitVisible] = useState(true);
    const [notification, setnotificationVisible] = useState(false);
    const [createdHabit, setcreatedHabitVisible] = useState(false);
    const [userMemory, setUserMemory] = useState(user);

    const backPageClick = () => {
        logout();
        window.history.back();
    }

    return (
        <div className={style.conteiner__home}>
            <div className={style.conteiner__home_left}>
                <div className={style.conteiner__home_left_options}>
                    <button
                        onClick={
                            () => {
                                setViewHabitVisible(true)
                                setnotificationVisible(false)
                                setcreatedHabitVisible(false)
                            }}>
                        <p>
                            Habit Tracker
                        </p>
                    </button>
                </div>
                <div className={style.conteiner__home_left_options}>
                    <button
                        onClick={
                            () => {
                                setViewHabitVisible(false)
                                setnotificationVisible(true)
                                setcreatedHabitVisible(true)
                            }}>
                        <img
                            src=""
                            alt="" />
                        <p>
                            Notificacoes
                        </p>
                    </button>
                </div>
                <div className={style.conteiner__home_left_options}>
                    <button
                        onClick={
                            () => {
                                setViewHabitVisible(false)
                                setnotificationVisible(false)
                                setcreatedHabitVisible(true)
                            }}>
                        <img
                            src=""
                            alt="" />
                        <p>
                            Created Habbit
                        </p>
                    </button>
                </div>
                <div className={style.conteiner__home_left_options}>
                    <button>
                        <img
                            src=""
                            alt="" />
                        <p>
                            Perfil
                        </p>
                    </button>
                </div>
                <div className={style.conteiner__home_left_options}>
                    <button
                        onClick={backPageClick}>
                        <img
                            src=""
                            alt="" />
                        <p>
                            Sair
                        </p>
                    </button>
                </div>
            </div>
            <div className={style.conteiner__home_vertical_line}></div>
            <div className={style.conteiner__home_right}>
                <div className={style.conteiner__createHabit_button_back}>
                        
                        <img
                            src="https://images.vexels.com/media/users/3/189738/isolated/preview/e531a6d28931f7c224be0c595c5f5cf1-seta-para-a-esquerda-do-graffiti.png"
                            alt="voltar" 
                            onClick={backPageClick} />
                </div>
                {viewHabit &&
                    (
                        <ViewHabit
                            userId={userMemory?.user.username} />
                    )
                }
                {notification &&
                    (
                        <Notifications />
                    )
                }
                {createdHabit &&
                    (
                        <CreateHabit
                            userId={userMemory?.user.username} />
                    )
                }
            </div>
        </div>
    )
}

export default Home;