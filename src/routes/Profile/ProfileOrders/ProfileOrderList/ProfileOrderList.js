import React from 'react';
import s from './ProfileOrderList.module.scss';
import ProfileOrderItem from "./ProfileOrderItem/ProfileOrderItem";

const ProfileOrderList = (props) => {
    return (
        <ul className={s.profileOrderList}>
            {props.orders.map((order, index) => {
                return <ProfileOrderItem
                    order={order}
                    key={order.id}
                    index={index}
                    onChange={props.onToggle}
                />;
            })}
        </ul>
    );
};

export default ProfileOrderList;