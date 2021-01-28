import React from 'react';
import s from './TabNavigation.module.scss';
import {NavLink} from "react-router-dom";
import image from '../../../assets/img/svg/settings.svg';

const TabNavigation = (props) => {

    function isActive(page) {
        // console.log(props.page.includes(page));
        if (props.page.includes(page)) {
            return s.active;
        }
        return '';
    }

    return (
        <div className={s.tabNavigation}>
            <NavLink to={`/profile`} className={`${s.tabItems} ${isActive('profile')}`}>Профиль</NavLink>
            <NavLink to={`/orders`} className={`${s.tabItems} ${isActive('orders')}`}>Мои заказы</NavLink>
            <img src={image} alt="settings"/>
        </div>
    );
};

export default TabNavigation;