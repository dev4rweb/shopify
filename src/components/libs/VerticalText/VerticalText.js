import React from 'react';
import s from './VerticalText.module.scss';

const VerticalText = (props) => {
    let text = props.text || 'Vertical text';
    return (
        <p className={s.text}>{text}</p>
    )
};

export default VerticalText;