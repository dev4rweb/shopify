import React, {Suspense, lazy, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import s from './App.module.scss';
import Header from "./modules/Header/Header";
import Aside from "./modules/Aside/Aside";
import Footer from "./modules/Footer/Footer";
import Preloader from "./components/libs/Preloader/Preloader";
import ReducerData from "./context/Data/ReducerData";
import StateData from "./context/Data/StateData";
import ContextData from "./context/Data/ContextData";
import detectBrowserLanguage from 'detect-browser-language';

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


function App(props) {
    /*Api key - 11d94cb06dca9a628b1e9b010307dfe2*/
    /*API secret key - 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*/

    /*https://shopify.github.io/shopify-app-cli/*/

    /*https://youtu.be/yWyCZbSysMs*/
    /*https://youtu.be/AZna1vyOLi0*/

    /*https://github.com/Shopify/shopify-demo-app-node-react*/
    /*https://github.com/Shopify/storefront-api-examples*/

    /*yarn add shopify-buy*/
    /*yarn add detect-browser-language*/

    const [stateData, dispatchData] = React.useReducer(ReducerData, StateData);

    useEffect(() => {
        const fetchLang = async () => {
            try {
                const lang = await detectBrowserLanguage().includes('ru') ?
                    'ru' : 'en';
                dispatchData({
                    type: "FETCH_LANG",
                    payload: lang
                })
            } catch (e) {
                console.log(e);
            }
        };
        fetchLang();
    }, []);
    const footerRef = React.createRef();

    function changeLanguage(lang) {
        dispatchData({
            type: 'FETCH_LANG',
            payload: lang
        })
    }

    let lang = stateData.lang;

    return (
        <ContextData.Provider value={{stateData, dispatchData}}>
            <div className={s.App}>
                <Header footerRef={footerRef}/>
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
                <Aside lang={stateData.lang} data={stateData.aside}/>
                <Footer
                    ref={footerRef}
                    changeLanguage={changeLanguage}
                    lang={lang}
                />
            </div>
        </ContextData.Provider>

    );
}

export default App;
