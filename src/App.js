import React, { Suspense, lazy } from "react";
import {Route, Switch} from "react-router-dom";
import s from './App.module.scss';
import Header from "./modules/Header/Header";
import Aside from "./modules/Aside/Aside";
import Footer from "./modules/Footer/Footer";

const Main = lazy(() => import("./routes/Main/Main"));
const Guarantee = lazy(() => import("./routes/Guarantee/Guarantee"));
const Payment = lazy(() => import("./routes/Payment/Payment"));
const Refund = lazy(() => import("./routes/Refund/Refund"));
const About = lazy(() => import("./routes/About/About"));
const Contacts = lazy(() => import("./routes/Contacts/Contacts"));
const Profile = lazy(() => import("./routes/Profile/Profile"));
const Auth = lazy(() => import("./routes/Auth/Auth"));
const Errors = lazy(() => import("./routes/Errors/Errors"));

function App() {
    /*https://shopify24.ru/*/
    /*https://shopify.dev/concepts/shopify-introduction*/
    return (
        <div className={s.App}>
            <Header/>
            <main>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Switch>
                        <Route path={`/`} exact component={Main}/>
                        <Route path={`/guarantee`} component={Guarantee}/>
                        <Route path={`/payment`} component={Payment}/>
                        <Route path={`/refund`} component={Refund}/>
                        <Route path={`/about`} component={About}/>
                        <Route path={`/contacts`} component={Contacts}/>
                        <Route path={`/profile`} component={Profile}/>
                        <Route path={`/auth`} component={Auth}/>
                        <Route component={Errors}/>
                    </Switch>
                </Suspense>
            </main>
            <Aside/>
            <Footer/>
        </div>
    );
}

export default App;
