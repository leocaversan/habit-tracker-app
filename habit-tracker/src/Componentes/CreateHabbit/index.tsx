import React, { useState } from 'react';
import style from "./CreateHabbit.module.css";

import { createdHabit } from '../../services/api';
import { propsUser } from '../../Props/props';


const CreateHabit = ({userId}:propsUser) =>  {

    const [habit, setHabit] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const created = async () => {
        await createdHabit(habit, time, userId)
    }

    return (
        <div className={style.conteiner__createHabit}>

            <div className={style.conteiner__createHabit_description}>
                Created your habbit
            </div>
            <div className={style.conteiner__createHabit_body}>
                <div className={style.conteiner__createHabit_content_input}>
                    <div className={style.conteiner__createHabit_input_conteiner}>
                        <div>
                            <img
                                src="https://w7.pngwing.com/pngs/123/562/png-transparent-drawing-computer-icons-pencil-pencil-angle-pencil-public-relations.png"
                                alt="lapis"
                            />
                            <p>nome do habito</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={habit}
                                onChange={(e) => setHabit(e.target.value)}
                            />
                        </div>
                        <div>
                            <img
                                src="https://w7.pngwing.com/pngs/123/562/png-transparent-drawing-computer-icons-pencil-pencil-angle-pencil-public-relations.png"
                                alt="lapis"
                            />
                            <p>Horario do Habito</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <img
                                src="https://w7.pngwing.com/pngs/123/562/png-transparent-drawing-computer-icons-pencil-pencil-angle-pencil-public-relations.png"
                                alt="lapis"
                            />
                            <p>Periodicidade o habito</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                    </div>
                </div>
                <div className={style.conteiner__createHabit_button_create}>
                    <span 
                        onClick={() => {
                        created()
                        setDate('')
                        setHabit('')
                        setTime('')
                        }}>
                        Created
                    </span>
                </div>
            </div>
        </div>
    );
};
export default CreateHabit;
