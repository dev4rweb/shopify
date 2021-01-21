import React from 'react';
import s from './GuaranteeCard.module.scss';

const GuaranteeCard = (props) => {
    return (
        <div className={s.guaranteeCard}>
            <img src={props.img} alt="img"/>
            <div className={s.content}>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default GuaranteeCard;