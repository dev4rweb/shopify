import React from 'react';
import s from './Profile.module.scss';
import InfoCard from "../../components/ui/main/InfoCard/InfoCard";
import imgSupport from "../../assets/img/svg/support.svg";
import imgAutomatic from "../../assets/img/svg/automatic.svg";
import imgCard from "../../assets/img/svg/credit-card.svg";
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import TabNavigation from "../../components/ui/TabNavigation/TabNavigation";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
import ContextData from "../../context/Data/ContextData";

const Profile = () => {
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
        <section className={s.profile}>
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
                    page={`profile`}
                    lang={lang}
                    data={stateData.profilePage}
                />
                <div className={s.profileContainer}>
                    <ProfileCard
                        lang={lang}
                        data={stateData.profileCard}
                    />
                    <ProfileOrders
                        lang={lang}
                        data={stateData.profileOrders}
                    />
                </div>
            </div>
        </section>
    )
};

export default Profile;