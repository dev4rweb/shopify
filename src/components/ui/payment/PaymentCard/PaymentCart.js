import React from 'react';
import s from './PaymentCart.module.scss';

const PaymentCart = (props) => {
    return (
        <div className={s.paymentCart}>
            <span>{props.number}</span>
            <img src={props.image} alt={`img`}/>
            <h6>{props.content}</h6>
        </div>
    )
};

export default PaymentCart;