import React from 'react';
import s from './Cards.module.scss';
import Product from "./Product/Product";
import ContextData from "../../../context/Data/ContextData";

const Cards = (props) => {
    const {stateData} = React.useContext(ContextData);
    let lang = stateData.lang;
    let products = props.products.map((product) => {

        // console.log(product.productType);
        if (product.vendor.includes(lang)) {
            if (!stateData.filter) {
                // console.log('NULLSSS');
                return (
                    <Product
                        client={props.client}
                        key={product.id.toString()}
                        product={product}
                    />
                );
            } else {
                if (product.productType.includes(stateData.filter)) {
                    return (
                        <Product
                            client={props.client}
                            key={product.id.toString()}
                            product={product}
                        />
                    );
                }
            }
        }
    });

    return (
        <div className={s.cards}>
            {products}
        </div>
    )
};

export default Cards;