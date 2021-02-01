import React from 'react';
import s from './Cards.module.scss';
import Product from "./Product/Product";

const Cards = (props) => {
    let products = props.products.map((product) => {
        return (
            <Product
                client={props.client}
                key={product.id.toString()}
                product={product}
            />
        );
    });
    return (
        <div className={s.cards}>
            {products}
        </div>
    )
};

export default Cards;