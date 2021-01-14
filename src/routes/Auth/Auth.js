import React from 'react';
import s from './Auth.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Auth = () => {
    return (
        <section className={s.auth}>
            <h1>Профайл</h1>
            <ComingSoon id={`csAuth`} dateString={`Fab 01, 2021 13:00:00`}/>
        </section>
    )
};

export default Auth;