import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';


const avatar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigator = useNavigate();
    
    return (
        <div>
            <p className='conteiner__avatar' onClick={() => navigator('/login')}>
                HT
            </p>
        </div>
    );
};

export default avatar;