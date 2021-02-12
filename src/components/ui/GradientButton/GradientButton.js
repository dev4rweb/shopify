import React from 'react';
import s from './GradientButton.module.scss';

const GradientButton = (props) => {
    let name = props.name || "Submit";
    return (
        <button
            // type={`submit`}
            className={s.gradientButton}>
            <a href="https://t.me/softkeydog_bot"
               target={`_blank`}>
                {name}
            </a>
        </button>
    )
};

export default GradientButton;