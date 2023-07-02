import React from "react";
import './index.css'

const ViewHabit = () => {
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
                    <button>
                        <img src="" alt="surch" />
                    </button>
                    <button>
                        <img src="" alt="edit" />
                    </button>
                    <button>
                        <img src="" alt="delete" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewHabit;