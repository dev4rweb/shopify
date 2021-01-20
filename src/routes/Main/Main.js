import React from 'react';
import s from './Main.module.scss';
import InfoCard from "../../components/ui/main/InfoCard/InfoCard";
import imgSupport from './../../assets/img/svg/support.svg';
import imgAutomatic from './../../assets/img/svg/automatic.svg';
import imgCard from './../../assets/img/svg/credit-card.svg';
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import Cards from "../../components/libs/ProductCards/Cards";

const Main = () => {
    return (
        <section className={s.main}>
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
                <Breadcrumbs/>
                <Cards/>
            </div>
        </section>
    )
};

export default Main;