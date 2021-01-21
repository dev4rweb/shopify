import React from 'react';
import s from './Guarantee.module.scss';
import ComingSoon from "../../components/libs/ComingSoon/ComingSoon";
import InfoCard from "../../components/ui/main/InfoCard/InfoCard";
import imgSupport from "../../assets/img/svg/support.svg";
import imgAutomatic from "../../assets/img/svg/automatic.svg";
import imgCard from "../../assets/img/svg/credit-card.svg";
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import GuaranteeCard from "../../components/ui/guarantee/GuaranteeCard/GuaranteeCard";
import icWebmoney from '../../assets/img/png/ic-webmoney.png'
import icCreditCard from '../../assets/img/png/ic-credit-card.png'
import icDelivery from '../../assets/img/png/ic-delivery.png'

let textWebmoney = 'Мы прошли аттестацию в платежной системе Webmoney и получили' +
    'персональный аттестат. Это Обеспечивает Вам безопасность покупок';
let textPayment = "Вы можете выбрать тот вариант оплаты, который считаете" +
    " максимально удобным и надежным.";
let textDelivery = 'После совершения оплаты вы моментально получите свой товар.';

const Guarantee = () => {
    return (
        <section className={s.guarantee}>
            <div className={s.wrapper}>
                <div className={s.containerInfo}>
                    <InfoCard imgUrl={imgSupport} altImg={`image`}
                              titleHead={`Тех Поддержка`} msg={`онлайн`}/>
                    <InfoCard imgUrl={imgAutomatic} altImg={`image`}
                              titleHead={`Автоматическая`} msg={`отправка ключей`}/>
                    <InfoCard imgUrl={imgCard} altImg={`image`}
                              titleHead={`Все виды оплаты`} msg={`онлайн`}/>
                </div>
                <Promo dateString={`December 31, 2021 00:00:25`}/>
                <Breadcrumbs title={`Гарантии SoftKey`}/>
                <div className={s.guaranteeWrapper}>
                    <GuaranteeCard img={icWebmoney}
                                   title={`Аттестат webmoney`}
                                   content={textWebmoney}/>
                    <GuaranteeCard img={icCreditCard}
                                   title={`Множество способов оплаты`}
                                   content={textPayment}/>
                    <GuaranteeCard img={icDelivery}
                                   title={`Моментальная доставка`}
                                   content={textDelivery}/>
                    <GuaranteeCard img={icWebmoney}
                                   title={`Аттестат webmoney`}
                                   content={textWebmoney}/>
                    <GuaranteeCard img={icCreditCard}
                                   title={`Множество способов оплаты`}
                                   content={textPayment}/>
                    <GuaranteeCard img={icDelivery}
                                   title={`Моментальная доставка`}
                                   content={textDelivery}/>
                    <GuaranteeCard img={icWebmoney}
                                   title={`Аттестат webmoney`}
                                   content={textWebmoney}/>
                    <GuaranteeCard img={icCreditCard}
                                   title={`Множество способов оплаты`}
                                   content={textPayment}/>
                    <GuaranteeCard img={icDelivery}
                                   title={`Моментальная доставка`}
                                   content={textDelivery}/>
                </div>
            </div>
        </section>
    )
};

export default Guarantee;