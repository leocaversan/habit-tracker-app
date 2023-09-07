import { useEffect, useState } from "react";
import style from "./ViewHabbit.module.css";

import { getHabits, deleteHabit } from "../../services/api";
import { habitSchema, propsUser } from "../../Props/props";
import { User } from "../../contexts/auth";



const ViewHabit = ({ userId }: propsUser) => {


    const [userMemory, setUserMemory] = useState<User | null>(null);;
    const [data, setData] = useState<habitSchema[]>([]);
    const fetchData = async () => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUserMemory(JSON.parse(savedUser));
            console.log(userMemory);
        }
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

        <div className={style.conteiner__viewHabit}>
            <div className={style.conteiner__viewHabit_header}>
                <h1>
                    Habitos
                </h1>
            </div>
            {
                data.map((data, index) => (
                    <span className={style.conteiner__viewHabit_body} key={index}>
                        <p>
                            Habito : {data.habit}
                        </p>
                        <div>
                            <img 
                                src="https://www.pngfind.com/pngs/m/692-6921642_transparent-books-drawing-png-books-drawing-png-download.png" 
                                alt="view" 
                                onClick={() => { setSelectedItemView(index) }} />
                            <img 
                                src="https://www.pngmart.com/files/22/Writing-Art-PNG-File.png" 
                                alt="edit" />
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYH3lp1iAHIiNZrKeAiq-_HsbvrG7bUuKv_Q&usqp=CAU" 
                                alt="delete" 
                                onClick={() => { setSelectedItemDelete(index) }} />
                        </div>
                    </span>
                ))
            }
            {selectedItemView !== null && (
                <span className={style.conteiner__viewHabit_ocult_span}
                    onClick={() => { setSelectedItemView(null) }} >
                    <div className={style.conteiner__viewHabit_ocult_span_insideSpan} >
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
                </span>
            )
            }
            {selectedItemDelete !== null && (
                <span className={style.conteiner__viewHabit_ocult_span} 
                    onClick={() => {
                    setSelectedItemDelete(null) }
                }>
                    <div className={style.conteiner__viewHabit_ocult_span_button}>
                        <h1>
                            Deseja excluir esse habito?
                        </h1>
                        <div className={style.conteiner__viewHabit_ocult_span_buttons}>
                            <button onClick={() => {
                                deleteData(data[selectedItemDelete].habit);
                                setSelectedItemDelete(null); }}>
                                Sim
                            </button>
                            <button>
                                Não
                            </button>
                        </div>
                    </div>
                </span>
            )}
        </div>

    );
};

export default ViewHabit;