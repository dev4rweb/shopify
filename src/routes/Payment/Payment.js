import React from 'react';
import s from './Payment.module.scss';
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import PaymentMain from "../../components/ui/payment/PaymentMain/PaymentMain";
import PaymentCart from "../../components/ui/payment/PaymentCard/PaymentCart";
import imgInstruction from '../../assets/img/png/ic-instruction.png'
import imgKey from '../../assets/img/png/ic-key.png'
import imgLink from '../../assets/img/png/ic-link.png'
import Coupon from "../../components/ui/payment/Coupon/Coupon";

const Payment = () => {
    return (
        <section className={s.payment}>
            <div className={s.wrapper}>
                <Promo dateString={`December 31, 2021 00:00:25`}/>
                <Breadcrumbs title={`Оплата и доставка на SoftKey`}/>
                <PaymentMain/>
                <p className={s.youGet}>В письме Вы получаете:</p>
                <div className={s.cardsWrapper}>
                    <PaymentCart number={1}
                    content={`Инструкцию по активации`}
                    image={imgInstruction}/>
                    <PaymentCart number={2}
                    content={`Лицензионный ключ активации`}
                    image={imgKey}/>
                    <PaymentCart number={3}
                    content={`ссылку на официальный дистрибутив`}
                    image={imgLink}/>
                </div>
                <div className={s.couponWrapper}>
                    <Coupon/>
                </div>
            </div>
        </section>
    )
};

export default Payment;