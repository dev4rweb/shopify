import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    function collapse() {
        if (window.innerWidth < 768) {
            let menu = document.getElementsByClassName(s.toggle)[0];
            menu.click();
        }
        // console.log('width - '+window.innerWidth);
    }
    return (
        <nav className={s.navigation}>
            <input type={`checkbox`} id={s.checkboxMenu}/>
            <label htmlFor={s.checkboxMenu}>
                <ul className={`${s.menu} ${s.touch}`}>
                    <li><NavLink to={`/`} onClick={collapse} exact activeClassName={s.active_link}>Продукция</NavLink></li>
                    <li><NavLink to={`/guarantee`} onClick={collapse} activeClassName={s.active_link}>Гарантия</NavLink></li>
                    <li><NavLink to={`/payment`} onClick={collapse} activeClassName={s.active_link}>Оплата и доставка</NavLink></li>
                    <li><NavLink to={`/refund`} onClick={collapse} activeClassName={s.active_link}>Обмен и возврат</NavLink></li>
                    <li><NavLink to={`/about`} onClick={collapse} activeClassName={s.active_link}>О компании</NavLink></li>
                    <li><NavLink to={`/contacts`} onClick={collapse} activeClassName={s.active_link}>Контакты</NavLink></li>
                </ul>
                <span className={s.toggle}>☰</span>
            </label>
        </nav>
    )
};

export default Navbar;