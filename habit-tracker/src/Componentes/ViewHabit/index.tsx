import React, { useEffect, useState } from "react";
import './index.css'

import { getHabits, deleteHabit } from "../../services/api";
import { habitSchema, propsUser } from "../../Props/props";
import { User, useUserContext } from "../../contexts/auth";



const ViewHabit = ({userId}:propsUser) => {


    const [userMemory, setUserMemory] = useState<User | null>(null);;
    const [data, setData] = useState<habitSchema[]>([]);
    const fetchData = async () => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUserMemory(JSON.parse(savedUser));
            console.log(userMemory);
        }
        console.log(userMemory);
        const receivedData = await getHabits(userId);
        setData(receivedData as unknown as habitSchema[]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteData = async (data: string) => {
        await deleteHabit(userId, data);
        await fetchData();
    }

    const [selectedItemView, setSelectedItemView] = useState<number | null>(null);
    const [selectedItemDelete, setSelectedItemDelete] = useState<number | null>(null);

    return (
        <div className="conteiner__viewHabit">
            <div className="conteiner__viewHabit-header">
                <h1>
                    Habitos
                </h1>

            </div>
            {
                data.map((data, index) => (
                    <div className="conteiner__viewHabit-body" key={index}>
                        <p>
                            Habito : {data.habit}
                        </p>
                        <div>
                            <button
                                onClick={() => {
                                    setSelectedItemView(index);
                                    console.log(selectedItemView);
                                }}>
                                <img src="https://www.pngfind.com/pngs/m/692-6921642_transparent-books-drawing-png-books-drawing-png-download.png" alt="view" />
                            </button>
                            <button>
                                <img src="https://www.pngmart.com/files/22/Writing-Art-PNG-File.png" alt="edit" />
                            </button>
                            <button onClick={() => {
                                setSelectedItemDelete(index);
                            }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYH3lp1iAHIiNZrKeAiq-_HsbvrG7bUuKv_Q&usqp=CAU" alt="delete" />
                            </button>
                        </div>
                    </div>
                ))
            }
            {selectedItemView !== null && (
                <div className="conteiner__viewHabit-ocult_span"
                    onClick={() => {
                        setSelectedItemView(null);
                        console.log(selectedItemView);

                    }}
                >
                    <div className="conteiner__viewHabit-ocult-span-insideSpan">
                        <p>
                            Habito: {data[selectedItemView].habit}
                        </p>
                        <button>
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
            {selectedItemDelete !== null && (
                <div className="conteiner__viewHabit-ocult_span" onClick={() => {
                    setSelectedItemDelete(null);
                    console.log(selectedItemDelete)
                }
                }>
                    <div className="conteiner__viewHabit-ocult_span-button">
                        <h1>
                            Deseja excluir esse habito?
                        </h1>
                        <div className="conteiner__viewHabit-ocult_span-buttons">
                            <button onClick={() => {
                                deleteData(data[selectedItemDelete].habit);
                                console.log(data[selectedItemDelete].habit)
                                setSelectedItemDelete(null);
                            }
                            }>
                                Sim
                            </button>
                            <button >
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

function fetchData() {
    throw new Error("Function not implemented.");
}
