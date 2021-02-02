import React from 'react';
import s from './ProfileOrderList.module.scss';
import ProfileOrderItem from "./ProfileOrderItem/ProfileOrderItem";
import ContextData from "../../../../context/Data/ContextData";

const ProfileOrderList = (props) => {

    let removeLineItemInCart = props.removeLineItemInCart;

    const {stateData, dispatchData} = React.useContext(ContextData);



    let line_items = stateData.checkout.lineItems.map((line_item, index)=>{

        return (
            <ProfileOrderItem
                id={line_item.id}
                order={line_item}
                key={line_item.id}
                index={index}
                // onChange={props.onToggle}
                removeLineItemInCart={removeLineItemInCart}
            />
        );
    });
    return (
        <ul className={s.profileOrderList}>
{/*            {props.orders.map((order, index) => {
                return <ProfileOrderItem
                    order={order}
                    key={order.id}
                    index={index}
                    onChange={props.onToggle}
                />;
            })}*/}
            {line_items}
        </ul>
    );
};

export default ProfileOrderList;