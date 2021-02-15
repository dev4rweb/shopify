import React, {useState} from 'react';
import s from './CustomInputNumber.module.scss';

const CustomInputNumber = (props) => {
    const [number, setNumber] = useState(props.quantity);
    console.log(number);

    const upHandler = () => {
        if (number < 100) {
            setNumber(number + 1);
            props.quantityHandler(number + 1);
        }
    };

    const downHandler = () => {
        if (number > 0) {
            setNumber(number - 1);
            props.quantityHandler(number - 1);
        }
    };

    function changeHandler (event) {
        console.log(number);
    }

    return (
        <div className={s.customInputNumber}>
            <button onClick={downHandler}>-</button>
            <input min={1} max={100} type="number" value={number} onChange={event => changeHandler(event)}/>
            <button onClick={upHandler}>+</button>
        </div>
    );
};

export default CustomInputNumber;