import s from './App.module.scss';
import Header from "./modules/Header/Header";
import React from "react";
import Aside from "./modules/Aside/Aside";
import Footer from "./modules/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import Main from "./routes/Main/Main";
import Guarantee from "./routes/Guarantee/Guarantee";
import Payment from "./routes/Payment/Payment";
import Refund from "./routes/Refund/Refund";
import About from "./routes/About/About";
import Contacts from "./routes/Contacts/Contacts";
import Errors from "./routes/Errors/Errors";
import Profile from "./routes/Profile/Profile";
import Auth from "./routes/Auth/Auth";

function App() {
  /*https://shopify24.ru/*/
  /*https://shopify.dev/concepts/shopify-introduction*/
    return (
        <div className={s.App}>
            <Header />
            <main>
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
            </main>
            <Aside/>
            <Footer/>
        </div>
    );
}

export default App;
