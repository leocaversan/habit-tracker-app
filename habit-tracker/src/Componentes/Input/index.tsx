import React, { useState } from 'react';

interface props {
    initialValue: string,
    onChange: (value: string) => void

}
const ClickableInput = ({ initialValue, onChange }: props) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const [isFirstClick, setIsFirstClick] = useState(true);

    const handleClick = () => {
        if (isFirstClick) {
            setInputValue('');
            setIsFirstClick(false);
        }
    };

    // const handleSubmit = (event: { preventDefault: () => void; }) => {
    //   event.preventDefault();
    //   onSubmit(inputValue);
    // };

    return (
        <input type="text" value={inputValue} onClick={handleClick}
            onChange={(e) => {
                setInputValue(e.target.value)
                if (typeof onChange === 'function') {

                  }
            }} />
    );
};

export default ClickableInput;






