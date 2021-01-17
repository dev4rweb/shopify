import React, { Suspense, lazy } from "react";
import {Route, Switch} from "react-router-dom";
import s from './App.module.scss';
import Header from "./modules/Header/Header";
import Aside from "./modules/Aside/Aside";
import Footer from "./modules/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

const Main = lazy(() => import("./routes/Main/Main"));
const Guarantee = lazy(() => import("./routes/Guarantee/Guarantee"));
const Payment = lazy(() => import("./routes/Payment/Payment"));
const Refund = lazy(() => import("./routes/Refund/Refund"));
const About = lazy(() => import("./routes/About/About"));
const Contacts = lazy(() => import("./routes/Contacts/Contacts"));
const Profile = lazy(() => import("./routes/Profile/Profile"));
const Auth = lazy(() => import("./routes/Auth/Auth"));
const Errors = lazy(() => import("./routes/Errors/Errors"));
const Orders = lazy(() => import("./routes/Orders/Orders"));

function App() {
    /*https://shopify24.ru/*/
    /*https://shopify.dev/concepts/shopify-introduction*/
    const ref = React.createRef();

    return (
        <div className={s.App}>
            <Header footerRef={ref}/>
            <main>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route path={`/`} exact component={Main}/>
                        <Route path={`/guarantee`} component={Guarantee}/>
                        <Route path={`/payment`} component={Payment}/>
                        <Route path={`/refund`} component={Refund}/>
                        <Route path={`/about`} component={About}/>
                        <Route path={`/contacts`} component={Contacts}/>
                        <Route path={`/profile`} component={Profile}/>
                        <Route path={`/auth`} component={Auth}/>
                        <Route path={`/orders`} component={Orders}/>
                        <Route component={Errors}/>
                    </Switch>
                </Suspense>
            </main>
            <Aside/>
            <Footer ref={ref}/>
        </div>
    );
}

export default App;
