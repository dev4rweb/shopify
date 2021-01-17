import React from 'react';
import s from './Main.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Main = () => {
    return (
        <section className={s.main}>
            <h1>Продукция</h1>
            <ComingSoon dateString={`Jan 18, 2021 13:00:00`}/>
        </section>
    )
};

export default Main;