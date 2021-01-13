import './App.module.scss';
import Header from "./modules/Header/Header";
import React from "react";
import Aside from "./modules/Aside/Aside";
import Footer from "./modules/Footer/Footer";

function App() {
  /*https://shopify24.ru/*/
  /*https://shopify.dev/concepts/shopify-introduction*/
    return (
        <div className="App">
            <Header />
            <main>
                Main
            </main>
            <Aside/>
            <Footer/>
        </div>
    );
}

export default App;
