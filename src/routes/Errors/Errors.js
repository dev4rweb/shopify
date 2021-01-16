import React from 'react';
import s from './Errors.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Errors = () => {
    return (
        <section className={s.errors}>
            <h1>Not found :-(</h1>
            <ComingSoon id={`csErrors`} dateString={`February 08, 2021 13:00:00`}/>
        </section>
    )
};

export default Errors;