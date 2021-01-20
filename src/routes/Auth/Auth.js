import React from 'react';
import s from './Auth.module.scss';
import ComingSoon from "../../components/libs/ComingSoon/ComingSoon";

const Auth = () => {
    return (
        <section className={s.auth}>
            <h1>Авторизация</h1>
            <ComingSoon dateString={`Fab 01, 2021 13:00:00`}/>
        </section>
    )
};

export default Auth;