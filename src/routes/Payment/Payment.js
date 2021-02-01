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
import ContextData from "../../context/Data/ContextData";

const Payment = () => {
    // eslint-disable-next-line no-unused-vars
    const {stateData} = React.useContext(ContextData);
    let lang = stateData.lang;
    let breadcrumbs = stateData.breadcrumbs.paymentPage[lang] ||
        'Оплата и доставка на SoftKey';

    let title = stateData.paymentPage.title[lang] ||
        'В письме Вы получаете:';

    let payCartInstruction = stateData.paymentPage.paymentCards.instruction[lang] ||
        `Инструкцию по активации`;
    let payCartKey = stateData.paymentPage.paymentCards.key[lang] ||
        `Лицензионный ключ активации`;
    let payCartLink = stateData.paymentPage.paymentCards.link[lang] ||
        `ссылку на официальный дистрибутив`;

    return (
        <section className={s.payment}>
            <div className={s.wrapper}>
                <Promo
                    dateString={stateData.promo.date}
                    content={stateData.promo.content[lang]}
                />
                <Breadcrumbs title={breadcrumbs}/>
                <PaymentMain
                    content={stateData.paymentPage.paymentMain[lang]}
                />
                <p className={s.youGet}>{title}</p>
                <div className={s.cardsWrapper}>
                    <PaymentCart number={1}
                                 content={payCartInstruction}
                                 image={imgInstruction}/>
                    <PaymentCart number={2}
                                 content={payCartKey}
                                 image={imgKey}/>
                    <PaymentCart number={3}
                                 content={payCartLink}
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