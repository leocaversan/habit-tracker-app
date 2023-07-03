import React, { useState } from "react";
import './index.css'


const ViewHabit = () => {

    const [spanVisibleView, setSpanViewVisible] = useState(false);
    const [spanVisibleDelete, setSpanDeleteVisible] = useState(false);

    return (
        <div className="conteiner__viewHabit">
            <div className="conteiner__viewHabit-header">
                <h1>
                    Habitos
                </h1>
            </div>
            <div className="conteiner__viewHabit-body">
                <p>
                    Habito { }: { }
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
                                    Sim
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewHabit;