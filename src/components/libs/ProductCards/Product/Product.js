import React from 'react';
import s from './Product.module.scss';
import star from '../../../../assets/img/png/ic-star.png';
import like from '../../../../assets/img/png/ic_like.png';
import photo from '../../../../assets/img/products/Windows/OC/Microsoft Windows 10 Home.png';
import basket from '../../../../assets/img/svg/shopping-basket-white.svg';
import {NavLink} from "react-router-dom";
import ContextData from "../../../../context/Data/ContextData";

const Product = (props) => {
    const {stateData, dispatchData} = React.useContext(ContextData);
    // console.log(props.product);
    let product = props.product;
    let client = props.client;
    let variant = product.variants[0];

    let title = product.title || 'Title';
    let description = product.description || 'description';
    let image = product.images.length ? product.images[0].src : photo;
    let price = product.variants[0].price || 'price';



    function addVariantToCart(variantId, quantity){
        console.log('addVariantToCart  variantId - '
            + variantId + '= quantity - ' + quantity);
        const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
        const checkoutId = stateData.checkout.id;

        return client.checkout.addLineItems(checkoutId, lineItemsToAdd)
            .then(res=>{
                dispatchData({
                    type: "FETCH_CHECKOUT",
                    payload: res
                })
            })
    }

    return (
        <div className={s.product}>
            <div className={s.star}><img src={star} alt="star"/></div>
            <img className={s.like} src={like} alt="like"/>
            <img className={s.photo} src={image} alt=""/>
            <div className={s.info}>
                <h2>{title}</h2>
                <p>{description}</p>
                <a className={s.button}
                   onClick={()=> addVariantToCart(variant.id, 1)}>
                    <div>
                        <img src={basket} alt="basket"/>
                    </div>
                    <h5>{price} $</h5>
                </a>
            </div>
        </div>
    )
};

export default Product;