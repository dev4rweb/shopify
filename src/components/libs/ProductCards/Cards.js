import React from 'react';
import s from './Cards.module.scss';
import Product from "./Product/Product";

const Cards = () => {
    return (
        <div className={s.cards}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
};

export default Cards;