import React from 'react';
import s from './ProfileOrderItem.module.scss';
import Checkbox from "react-custom-checkbox";

const ProfileOrderItem = (props) => {
    // const product = props.order.name || 'Product undefined';
    let id = props.id || props.order.id;
    const product = props.order.title || 'Product undefined';
    // const price = props.order.price || '000';
    const price = props.order.variant.price || '000';
    const isRemove = props.order.isRemove || false;

    function removeItem(id) {
        console.log(id);
        props.removeLineItemInCart(id);
    }

    return (
        <li className={s.profileOrderItem}>
            <p className={s.productName}>{product}</p>
            <div className={s.priceWrapper}>
                <span className={s.price}>{price}$</span>
                <Checkbox checked={isRemove}
                          icon={<div className={s.dotCheck}/>}
                          size={39}
                          borderRadius={10}
                          borderColor={`#e8eff4`}
                          style={{
                              cursor: 'pointer',
                              backgroundColor: '#e8eff4',
                              outline: 'none'
                          }}
                          onChange={()=>removeItem(id)}
                />
            </div>
        </li>
    )
};

export default ProfileOrderItem;