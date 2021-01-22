import React from 'react';
import s from './GradientButton.module.scss';

const GradientButton = (props) => {
    let name = props.name || "Submit";
    return (
        <button type={`submit`} className={s.gradientButton}>{name}</button>
    )
};

export default GradientButton;