import React from 'react';
import s from './ProfileOrders.module.scss';
import imgDel from '../../../assets/img/svg/delete.svg'
import ProfileOrderList from "./ProfileOrderList/ProfileOrderList";
import ContextData from "../../../context/Data/ContextData";

const ProfileOrders = (props) => {
    const {stateData} = React.useContext(ContextData);

    let removeLineItemInCart = props.removeLineItemInCart;


    let totalPrice = stateData.checkout.totalPrice;

    const lang = props.lang || 'ru';
    let basket = props.data ? props.data.basket[lang] : 'text';
    let btnPay = props.data ? props.data.btnPay[lang] : 'text';
    let btnPromo = props.data ? props.data.btnPromo[lang] : 'text';

    const [orders, setOrders] = React.useState([
        {id: 1, name: 'Наименование товара', price: '600', isRemove: false},
        {id: 2, name: 'Наименование товара', price: '600', isRemove: true},
        {id: 3, name: 'Наименование товара', price: '600', isRemove: true},
        {id: 4, name: 'Наименование товара', price: '600', isRemove: false},
        {id: 5, name: 'Наименование товара', price: '600', isRemove: false},
    ]);

    function toggleOrder(id) {
        console.log('toggleOrder - ' + id);
        setOrders(
            orders.map(order => {
                if (order.id === id) {
                    order.isRemove = !order.isRemove;
                }
                return order;
            })
        );
    }

    function removeItems() {
        // console.log('click remove');
        setOrders(orders.filter(order => order.isRemove === false));
    }

    const loadData = async () => {
        window.open(stateData.checkout.webUrl);

    };

    return (
        <div className={s.profileOrders}>
            <h6 className={s.header}>
                {basket}
                <img src={imgDel} alt="trashcan" onClick={removeItems}/>
            </h6>
            <div className={s.orders}>
                {orders.length ? (
                    <ProfileOrderList
                        orders={orders}
                        onToggle={toggleOrder}
                        removeLineItemInCart={removeLineItemInCart}
                    />
                ) : (
                    <p>No orders!</p>
                )}
            </div>
            <div className={s.footer}>
                <div className={s.sumWrapper}>
                    <button
                        className={s.btnGradient}
                        onClick={() => loadData()}>
                        {btnPay}
                    </button>
                    <span className={s.sum}>{totalPrice} $</span>
                </div>
                <p className={s.promo}>{btnPromo}</p>
            </div>
        </div>
    );
};

export default ProfileOrders;