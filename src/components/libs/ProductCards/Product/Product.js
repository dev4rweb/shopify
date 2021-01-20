import React from 'react';
import s from './Product.module.scss';
import star from '../../../../assets/img/png/ic-star.png';
import like from '../../../../assets/img/png/ic_like.png';
import photo from '../../../../assets/img/products/Windows/OC/Microsoft Windows 10 Home.png';
import basket from '../../../../assets/img/svg/shopping-basket-white.svg';
import {NavLink} from "react-router-dom";

const Product = () => {
    return (
        <div className={s.product}>
            <div className={s.star}><img src={star} alt="star"/></div>
            <img className={s.like} src={like} alt="like"/>
            <img className={s.photo} src={photo} alt=""/>
            <div className={s.info}>
                <h2>Microsoft Windows 10 HOME</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores earum quod!</p>
                <NavLink className={s.button} to={`/orders`}>
                    <div>
                        <img src={basket} alt="basket"/>
                    </div>
                    <h5>890 $</h5>
                </NavLink>
            </div>
        </div>
    )
};

export default Product;