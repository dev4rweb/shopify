import React from 'react';
import s from './Refund.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Refund = () => {
    return (
        <section className={s.refund}>
            <h1>Обмен и возврат</h1>
            <ComingSoon id={`csRefund`} dateString={`Jan 24, 2021 13:00:00`}/>
        </section>
    )
};

export default Refund;