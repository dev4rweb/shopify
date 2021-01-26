import React from 'react';
import s from './Auth.module.scss';
import AuthFormik from "./AuthFormik/AuthFormik";
import RegisterFormik from "./RegisterFormik/RegisterFormik";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleRegisterClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let loginBtn;
        let regBtn;
        let container;
        if (isLoggedIn) {
            container = <div className={s.authFormik}>
                <AuthFormik/>
            </div>;
            loginBtn = s.active;
            regBtn = '';
        } else {
            container = <div className={s.registerFormik}>
                <RegisterFormik/>
            </div>
            loginBtn = '';
            regBtn = s.active;
        }
        return (
            <section className={s.auth}>
                <div className={s.wrapper}>
                    <div className={s.btnWrapper}>
                        <button className={`${s.btn} ${loginBtn}`} onClick={this.handleLoginClick}>Войти</button>
                        <button className={`${s.btn} ${regBtn}`} onClick={this.handleRegisterClick}>Регистрация</button>
                    </div>
                    {container}
                </div>
            </section>
        );
    }
}

export default Auth;