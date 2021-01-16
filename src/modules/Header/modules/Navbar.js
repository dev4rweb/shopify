import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    function collapse(e, data) {
        if (window.innerWidth < 768) {
            let menu = document.getElementsByClassName(s.toggle)[0];
            menu.click();
        }
        console.log('width - ' + window.innerWidth + ' data - ' + data);
        console.log('url - ' + document.URL);
    }

    function navbarLoaded() {
        console.log('Navbar Loaded loaded');
        const getHeaderFooter = setInterval(function () {
            const header = document.querySelector('#header');
            const footer = document.querySelector('footer');
            const menu = document.querySelector('#navigation');
            if (header != null && footer != null && menu != null) {
                clearInterval(getHeaderFooter);
                console.log('find Header Footer Menu');
            }
        }, 1000);
    }

    return (
        <nav className={s.navigation} onLoad={navbarLoaded()}>
            <input type={`checkbox`} id={s.checkboxMenu}/>
            <label htmlFor={s.checkboxMenu}>
                <ul id={`navigation`} className={`${s.menu} ${s.touch}`}>
                    <li><NavLink to={`/`} onClick={((e) => collapse(e, 'home'))} exact
                                 activeClassName={s.active_link}>Продукция</NavLink></li>
                    <li><NavLink to={`/guarantee`} onClick={((e) => collapse(e, 'guarantee'))}
                                 activeClassName={s.active_link}>Гарантия</NavLink></li>
                    <li><NavLink to={`/payment`} onClick={((e) => collapse(e, 'payment'))}
                                 activeClassName={s.active_link}>Оплата и доставка</NavLink></li>
                    <li><NavLink to={`/refund`} onClick={((e) => collapse(e, 'refund'))}
                                 activeClassName={s.active_link}>Обмен и возврат</NavLink></li>
                    <li><NavLink to={`/about`} onClick={((e) => collapse(e, 'about'))} activeClassName={s.active_link}>О
                        компании</NavLink></li>
                    <li><NavLink to={`/contacts`} onClick={((e) => collapse(e, 'contacts'))}
                                 activeClassName={s.active_link}>Контакты</NavLink></li>
                </ul>
                <span className={s.toggle}>☰</span>
            </label>
        </nav>
    )
};

export default Navbar;