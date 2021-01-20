import React from 'react';
import s from './InfoCard.module.scss';

const InfoCard = (props) => {
    return (
        <div className={s.container}>
            <img src={props.imgUrl} alt={props.altImg}/>
            <h4>{props.titleHead}</h4>
            <p>{props.msg}</p>
        </div>
    )
};

export default InfoCard;