import React from 'react';
import s from './Errors.module.scss';
import {NavLink} from "react-router-dom";

const Errors = () => {
    return (
        <section className={s.errors}>
            <p>Not found page</p>
            <h1> 404 </h1>
            <NavLink className={s.back} to={`/`}>Back</NavLink>
        </section>
    )
};

export default Errors;