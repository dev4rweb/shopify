import React from 'react';
import s from './Guarantee.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Guarantee = () => {
    return (
        <section className={s.guarantee}>
            <h1>Гарантия</h1>
            <ComingSoon id={`csGuarantee`} dateString={`Jan 20, 2021 13:00:00`}/>
        </section>
    )
};

export default Guarantee;