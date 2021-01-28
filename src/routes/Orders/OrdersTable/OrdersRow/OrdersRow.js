import React from 'react';
import s from './OrdersRow.module.scss';

const OrdersRow = (props) => {
    const index = props.index || 1;
    const name = props.order.name || 'undefined name';
    const price = props.order.price || 'unknown';
    const isBye = props.order.isBye || 'unknown';
    const link = props.order.link || 'unknown';
    return (
        <tr className={s.ordersRow}>
            <td>{index}</td>
            <td>{name}</td>
            <td>{price} $</td>
            <td>{isBye}</td>
            <td>{link}</td>
        </tr>
    )
};

export default OrdersRow;