import React from 'react';
import s from './Product.module.scss';
import star from '../../../../assets/img/png/ic-star.png';
import like from '../../../../assets/img/png/ic_like.png';
import photo from '../../../../assets/img/products/Windows/OC/Microsoft Windows 10 Home.png';
import basket from '../../../../assets/img/svg/shopping-basket-white.svg';
import {NavLink} from "react-router-dom";

const Product = (props) => {
    console.log(props.product);
    let product = props.product;
    let title = product.title || 'Title';
    let description = product.description || 'description';
    let image = product.images.length ? product.images[0].src : photo;
    let price = product.variants[0].price || 'price';

    return (
        <div className={s.product}>
            <div className={s.star}><img src={star} alt="star"/></div>
            <img className={s.like} src={like} alt="like"/>
            <img className={s.photo} src={image} alt=""/>
            <div className={s.info}>
                <h2>{title}</h2>
                <p>{description}</p>
                <NavLink className={s.button} to={`/orders`}>
                    <div>
                        <img src={basket} alt="basket"/>
                    </div>
                    <h5>{price} $</h5>
                </NavLink>
            </div>
        </div>
    )
};

export default Product;