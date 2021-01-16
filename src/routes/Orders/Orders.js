import React from 'react';
import s from './Orders.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Orders = () => {
    return (
        <section className={s.orders}>
            <h1>Заказы</h1>
            <ComingSoon id={`csOrders`} dateString={`February 06, 2021 13:00:00`}/>
        </section>
    )
};

export default Orders;