import React, { useEffect, useState } from "react";
import './index.css'

import axios from "axios";

import { getHabits } from "../../services/api";

interface habitSchema {
    habit: string,
    frequenciaHabit: string,
    userId: string,
    id: string,
}




const ViewHabit = () => {

    const [spanVisibleView, setSpanViewVisible] = useState(false);
    const [spanVisibleDelete, setSpanDeleteVisible] = useState(false);

    const [data, setData] = useState<habitSchema[]>([]);
    const userId = "leo_12345";



    const url = `/getHabits`;
    const loadData = async (userId: string) => {
        try {
            await axios.request<habitSchema[]>({
                method: 'POST',
                url: `http://localhost:4000${url}`,
                data: {
                    "userId": userId,
                }
            }).then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                } else if (response.status !== 200) {
                    console.log('Error');
                }
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        (async () => await loadData(userId))();
    }, []);

    return (
        <div className="conteiner__viewHabit">
            <div className="conteiner__viewHabit-header">
                <h1>
                    Habitos
                </h1>

            </div>
            {
                data.map(data => (
                    <div className="conteiner__viewHabit-body">
                        <p>
                            Habito { }: { data.habit }
                        </p>
                        <div>
                            <button
                                onClick={() => {
                                    setSpanViewVisible(!spanVisibleView);
                                }}>
                                <img src="" alt="view" />
                            </button>
                            <button>
                                <img src="" alt="edit" />
                            </button>
                            <button onClick={() => {
                                setSpanDeleteVisible(!spanVisibleDelete);
                            }}>
                                <img src="" alt="delete" />
                            </button>
                        </div>
                    </div>
                ))
            }

            {spanVisibleView && (
                <div className="conteiner__viewHabit-ocult_span">
                    <div className="conteiner__viewHabit-ocult-span-insideSpan">
                        <p>
                            Habito
                        </p>
                        <button
                            onClick={() => {
                                setSpanViewVisible(!spanVisibleView);
                            }}
                        >
                            <img src="" alt="edit" />
                        </button>
                    </div>
                    <div>
                        <p>
                            Horario do habito
                        </p>
                        <button>
                            16:00
                        </button>
                    </div>
                    <div>
                        <p>
                            Periodicidade do habito
                        </p>
                        <button>
                            Seg
                        </button>
                    </div>
                </div>
            )
            }
            {spanVisibleDelete && (
                <div className="conteiner__viewHabit-ocult_span">
                    <div className="conteiner__viewHabit-ocult_span-button">
                        <h1>
                            Deseja excluir esse habito?
                        </h1>
                        <div className="conteiner__viewHabit-ocult_span-buttons">
                            <button>
                                Sim
                            </button>
                            <button>
                                Não
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ViewHabit;