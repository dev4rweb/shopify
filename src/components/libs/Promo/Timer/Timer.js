import React from 'react';
import s from './Timer.module.scss';

const Timer = (props) => {
    // let days = Math.floor(props.distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((props.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((props.distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((props.distance % (1000 * 60)) / 1000);

    function splitNumber(number) {
        let output = [];
        if (number > 9) {
            let sNumber = number.toString();
            for (let i = 0; i < sNumber.length; i++) {
                output.push(sNumber.charAt(i));
            }
        } else {
            output.push('0');
            output.push(number.toString());
        }
        return output;
    }

    return (
        <div className={s.timer}>
            <p>
                <b>{splitNumber(hours)[0]}</b> <b>{splitNumber(hours)[1]}</b>
                <span>:</span>
                <b>{splitNumber(minutes)[0]}</b> <b>{splitNumber(minutes)[1]}</b>
                <span>:</span>
                <b>{splitNumber(seconds)[0]}</b> <b>{splitNumber(seconds)[1]}</b>
            </p>
        </div>
    )
};

export default Timer;