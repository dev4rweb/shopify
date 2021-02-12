import React from "react";
import s from './Header.module.scss'
import logo from './../../assets/img/png/logo250x250.png'
import logout from './../../assets/img/svg/logout.svg'
import user from './../../assets/img/svg/ic-user.svg'
import basket from './../../assets/img/svg/shopping-basket-grey.svg'
import Navbar from "./modules/Navbar";
import {NavLink} from "react-router-dom";
import ContextData from "../../context/Data/ContextData";

const Header = (props) => {
const headerRef = React.createRef();
    const {stateData} = React.useContext(ContextData);
    let basketCount = stateData.checkout.lineItems.length;
    let lang = stateData.lang;
    let header = stateData.header;
    let cabinet = header.cabinet[lang];
    return (
        <header className={s.header}>
            <div ref={headerRef} className={s.logo}>
                <div className={s.logo_box}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={s.account_box}>
                    <NavLink to={`/profile`}><img className={s.user} src={user} alt="icon user"/></NavLink>
                    <NavLink to={`/auth`} className={s.logout}>
                        <img src={logout} alt="logout"/>
                    </NavLink>
                    <div className={s.account_info}>
                        <p>DesHellArt</p>
                        <NavLink to={`/profile`}>{cabinet}</NavLink>
                    </div>
                    <NavLink to={`/profile`} className={s.basket}>
                        <img src={basket} alt="basket"/>
                             <span>{basketCount}</span>
                    </NavLink>
                </div>
            </div>
            <Navbar
                footerRef={props.footerRef}
                headerRef={headerRef}
                lang={lang}
                data={header.navbar}
            />
        </header>
    );
};

export default Header