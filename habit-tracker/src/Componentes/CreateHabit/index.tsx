import React, { useState } from 'react';
import './index.css';

import { createdHabit } from '../../services/api';

const CreateHabit = () => {


    const [habit, setHabit] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const userId = "leo"
    const created = async () => {
        await createdHabit(habit, time, userId)
    }


    return (
        <div className='conteiner__createHabit'>

            <div className='conteiner__createHabit-description'>
                Criando seu habito
            </div>
            <div className='conteiner__createHabit-body'>
                <div className='conteiner__createHabit-content-input'>
                    <div className='conteiner__createHabit-input-conteiner'>
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
                <div className='conteiner__createHabit-button-create'>
                    <button onClick={() => {
                        created()
                        setDate('')
                        setHabit('')
                        setTime('')
                        }}>
                        Created
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CreateHabit;
