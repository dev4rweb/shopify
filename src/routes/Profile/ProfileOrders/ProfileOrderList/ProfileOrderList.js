import React from 'react';
import s from './ProfileOrderList.module.scss';
import ProfileOrderItem from "./ProfileOrderItem/ProfileOrderItem";
import ContextData from "../../../../context/Data/ContextData";

const ProfileOrderList = (props) => {
    const {stateData, dispatchData} = React.useContext(ContextData);

    let line_items = stateData.checkout.lineItems.map((line_item, index)=>{

        return (
            <ProfileOrderItem
                order={line_item}
                key={line_item.id}
                index={index}
                onChange={props.onToggle}
            />
        )
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