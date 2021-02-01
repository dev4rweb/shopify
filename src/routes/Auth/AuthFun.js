import React from 'react';
import s from './Auth.module.scss';
import AuthFormik from "./AuthFormik/AuthFormik";
import RegisterFormik from "./RegisterFormik/RegisterFormik";
import ContextData from "../../context/Data/ContextData";

const AuthFun = () => {
    const {stateData, dispatchData} = React.useContext(ContextData);
    let lang = stateData.lang;
    let isLoggedIn = stateData.isLoggedIn;

    let btnLogText = stateData.authPage.btnAuth[lang];
    let btnRegText = stateData.authPage.btnReg[lang];

    let loginBtn = isLoggedIn ? s.active : '';
    let regBtn = isLoggedIn ? '' : s.active;
    let container = isLoggedIn ?
        <div className={s.authFormik}>
            <AuthFormik lang={lang} data={stateData.authFormik}/>
        </div> :
        <div className={s.registerFormik}>
            <RegisterFormik lang={lang} data={stateData.registerFormik}/>
        </div>;

    function loginClick() {
        dispatchData({
            type: 'IS_AUTH',
            payload: true
        });
    }

    function registerClick() {
        dispatchData({
            type: 'IS_AUTH',
            payload: false
        });
    }

    return (
        <section className={s.auth}>
            <div className={s.wrapper}>
                <div className={s.btnWrapper}>
                    <button
                        className={`${s.btn} ${loginBtn}`}
                        onClick={loginClick}>
                        {btnLogText}
                    </button>
                    <button
                        className={`${s.btn} ${regBtn}`}
                        onClick={registerClick}>
                        {btnRegText}
                    </button>
                </div>
                {container}
            </div>
        </section>
    )
};

export default AuthFun;