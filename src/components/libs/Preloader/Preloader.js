import React from 'react';
import s from './Preloader.module.scss';

const Preloader = () => {
    return (
        <section className={s.container}>
            <div className={s.loader}></div>
        </section>
    )
};

export default Preloader;