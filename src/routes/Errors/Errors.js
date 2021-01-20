import React from 'react';
import s from './Errors.module.scss';
import ComingSoon from "../../components/libs/ComingSoon/ComingSoon";

const Errors = () => {
    return (
        <section className={s.errors}>
            <h1>Not found :-(</h1>
            <ComingSoon dateString={`February 08, 2021 13:00:00`}/>
        </section>
    )
};

export default Errors;