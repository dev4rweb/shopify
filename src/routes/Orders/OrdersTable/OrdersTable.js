import React from 'react';
import s from './OrdersTable.module.scss';
import OrdersRow from "./OrdersRow/OrdersRow";

const OrdersTable = () => {

    const [orders, setOrders] = React.useState([
        {id: 1, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 2, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 3, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 4, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 5, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 6, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
    ]);

    return (
        <table className={s.ordersTable}>
            <thead>
            <tr className={s.header}>
                <th>№</th>
                <th>Наименование</th>
                <th>Стоимость</th>
                <th>Статус</th>
                <th>Ссылка</th>
            </tr>
            </thead>
            <tbody>
            {orders.length ? (
                orders.map((order, index) => {
                    return <OrdersRow
                        order={order}
                        key={order.id}
                        index={index}
                    />
                })
            ) : (
                <p>No orders!</p>
            )}
            </tbody>
        </table>
    );
};

export default OrdersTable;