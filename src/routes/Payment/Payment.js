import React from 'react';
import s from './Payment.module.scss';
import ComingSoon from "../../components/libs/ComingSoon/ComingSoon";

const Payment = () => {
    return (
        <section className={s.payment}>
            <h1>Оплата и доставка</h1>
            <ComingSoon dateString={`Jan 22, 2021 13:00:00`}/>
        </section>
    )
};

export default Payment;