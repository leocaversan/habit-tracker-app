import React from 'react';
import './index.css';

const CreateHabit = () => {
    const backPageClick = () => {
        window.history.back();
    }
    return (
        <div className='conteiner__createHabit'>
            <div className='conteiner__createHabit-button-back'>
                <button onClick={
                    backPageClick
                }>
                    <img
                        src="https://images.vexels.com/media/users/3/189738/isolated/preview/e531a6d28931f7c224be0c595c5f5cf1-seta-para-a-esquerda-do-graffiti.png"
                        alt="voltar"
                    />
                </button>
            </div>
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
                            <input type="text" />
                        </div>
                        <div>
                            <img
                                src="https://w7.pngwing.com/pngs/123/562/png-transparent-drawing-computer-icons-pencil-pencil-angle-pencil-public-relations.png"
                                alt="lapis"
                            />
                            <p>Horario do Habito</p>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <img
                                src="https://w7.pngwing.com/pngs/123/562/png-transparent-drawing-computer-icons-pencil-pencil-angle-pencil-public-relations.png"
                                alt="lapis"
                            />
                            <p>Periodicidade o habito</p>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    
                    </div>
                </div>
                <div className='conteiner__createHabit-button-create'>
                    <button>
                        Criar
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CreateHabit;
