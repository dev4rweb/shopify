import React from 'react';
import s from './OrdersTable.module.scss';
import OrdersRow from "./OrdersRow/OrdersRow";

const OrdersTable = (props) => {

    const lang = props.lang || 'ru';
    const tblName = props.data.tblName ? props.data.tblName[lang] : 'text';
    const tblCost = props.data.tblCost ? props.data.tblCost[lang] : 'text';
    const tblStatus = props.data.tblStatus ? props.data.tblStatus[lang] : 'text';
    const tblLink = props.data.tblLink ? props.data.tblLink[lang] : 'text';

    const [orders] = React.useState([
/*        {id: 1, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 2, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 3, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 4, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 5, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},
        {id: 6, name: 'Microsoft Office 365 pro', price: '638', isBye: 'Оплачено', link: 'Ссылка'},*/
    ]);

    return (
        <table className={s.ordersTable}>
            <thead>
            <tr className={s.header}>
                <th>№</th>
                <th>{tblName}</th>
                <th>{tblCost}</th>
                <th>{tblStatus}</th>
                <th>{tblLink}</th>
            </tr>
            </thead>
            <tbody>
            {orders.length ? (
                orders.map((order, index) => {
                    return <OrdersRow
                        order={order}
                        key={order.id}
                        index={index}
                        lang={lang}
                        data={props.data}
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