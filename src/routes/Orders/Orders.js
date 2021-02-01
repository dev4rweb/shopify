import React from 'react';
import s from './Orders.module.scss';
import ComingSoon from "../../components/libs/ComingSoon/ComingSoon";
import InfoCard from "../../components/ui/main/InfoCard/InfoCard";
import imgSupport from "../../assets/img/svg/support.svg";
import imgAutomatic from "../../assets/img/svg/automatic.svg";
import imgCard from "../../assets/img/svg/credit-card.svg";
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import TabNavigation from "../../components/ui/TabNavigation/TabNavigation";
import OrdersTable from "./OrdersTable/OrdersTable";
import ContextData from "../../context/Data/ContextData";

const Orders = () => {
    const {stateData} = React.useContext(ContextData);
    let lang = stateData.lang;


    const infoCard = stateData.infoCard;
    let support = infoCard.support[lang] || `Тех Поддержка`;
    let online = infoCard.online[lang] || 'онлайн';
    let automatic = infoCard.automatic[lang] || 'Автоматическая';
    let send = infoCard.send[lang] || `отправка ключей`;
    let pay = infoCard.pay[lang] || `Все виды оплаты`;
    let breadcrumbs = stateData.breadcrumbs.profilePage[lang] || 'Гарантии SoftKey';


    return (
        <section className={s.orders}>
            <div className={s.wrapper}>
                <div className={s.containerInfo}>
                    <InfoCard
                        imgUrl={imgSupport} altImg={`image`}
                        titleHead={support}
                        msg={online}
                    />
                    <InfoCard
                        imgUrl={imgAutomatic} altImg={`image`}
                        titleHead={automatic}
                        msg={send}
                    />
                    <InfoCard
                        imgUrl={imgCard} altImg={`image`}
                        titleHead={pay}
                        msg={online}/>
                </div>
                <Promo
                    dateString={stateData.promo.date}
                    content={stateData.promo.content[lang]}
                />
                <Breadcrumbs title={breadcrumbs}/>
                <TabNavigation
                    page={`orders`}
                    lang={lang}
                    data={stateData.profilePage}
                />
                <div className={s.table}>
                    <OrdersTable
                        lang={lang}
                        data={stateData.ordersPage}
                    />
                </div>
            </div>
        </section>
    )
};

export default Orders;