import React from 'react';
import s from './PaymentMain.module.scss';
import image from '../../../../assets/img/png/ic-payment-method.png';

const PaymentMain = () => {
    return (
        <div className={s.paymentMain}>
            <p>В течение 1-й минуты после получения оплаты, система автоматически отправляет ключ на е-меил, который был
                указан в платежной форме. Если письма нет в папке "Входящие", тогда проверьте папку «Спам».</p>
            <img src={image} alt="image"/>
        </div>
    )
};

export default PaymentMain;