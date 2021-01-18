import React from 'react';
import s from './Select.module.scss';
import {NavLink} from "react-router-dom";

const Select = () => {

    const rusRef = React.createRef();
    const enRef = React.createRef();

    function setLang(lang){
        let ruLang = rusRef.current;
        let enLang = enRef.current;
    }

    return (
        <div className={s.select}>
            <NavLink ref={rusRef}  to={`/ru`}>Russian</NavLink>
            <NavLink ref={enRef} to={`/en`}>English</NavLink>
        </div>
    )
};

export default Select;