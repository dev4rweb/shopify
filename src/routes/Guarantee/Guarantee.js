import React from 'react';
import s from './Guarantee.module.scss';
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
import ContextData from "../../context/Data/ContextData";

const Guarantee = () => {
    const {stateData} = React.useContext(ContextData);
    let lang = stateData.lang;
    const infoCard = stateData.infoCard;
    let support = infoCard.support[lang] || `Тех Поддержка`;
    let online = infoCard.online[lang] || 'онлайн';
    let automatic = infoCard.automatic[lang] || 'Автоматическая';
    let send = infoCard.send[lang] || `отправка ключей`;
    let pay = infoCard.pay[lang] || `Все виды оплаты`;
    let breadcrumbs = stateData.breadcrumbs.guaranteePage[lang] || 'Гарантии SoftKey';

    let guaranteeCardWebmoneyTitle = stateData.guaranteePage.webmoney.title[lang] ||
        'Аттестат webmoney';
    let guaranteeCardWebmoneyContent = stateData.guaranteePage.webmoney.content[lang] ||
        'Мы прошли аттестацию в платежной системе Webmoney и получили' +
        'персональный аттестат. Это Обеспечивает Вам безопасность покупок';

    let guaranteeCardPaymentTitle = stateData.guaranteePage.payment.title[lang] ||
        'Множество способов оплаты';
    let guaranteeCardPaymentContent = stateData.guaranteePage.payment.content[lang] ||
        'Вы можете выбрать тот вариант оплаты, который считаете максимально ' +
        'удобным и надежным. ';

    let guaranteeCardDeliveryTitle = stateData.guaranteePage.delivery.title[lang] ||
        'Моментальная доставка';
    let guaranteeCardDeliveryContent = stateData.guaranteePage.delivery.content[lang] ||
        'После совершения оплаты вы моментально получите свой товар.';
    return (
        <section className={s.guarantee}>
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
                <div className={s.guaranteeWrapper}>
                    <GuaranteeCard img={icWebmoney}
                                   title={guaranteeCardWebmoneyTitle}
                                   content={guaranteeCardWebmoneyContent}/>
                    <GuaranteeCard img={icCreditCard}
                                   title={guaranteeCardPaymentTitle}
                                   content={guaranteeCardPaymentContent}/>
                    <GuaranteeCard img={icDelivery}
                                   title={guaranteeCardDeliveryTitle}
                                   content={guaranteeCardDeliveryContent}/>
                    <GuaranteeCard img={icWebmoney}
                                   title={guaranteeCardWebmoneyTitle}
                                   content={guaranteeCardWebmoneyContent}/>
                    <GuaranteeCard img={icCreditCard}
                                   title={guaranteeCardPaymentTitle}
                                   content={guaranteeCardPaymentContent}/>
                    <GuaranteeCard img={icDelivery}
                                   title={guaranteeCardDeliveryTitle}
                                   content={guaranteeCardDeliveryContent}/>
                    <GuaranteeCard img={icWebmoney}
                                   title={guaranteeCardWebmoneyTitle}
                                   content={guaranteeCardWebmoneyContent}/>
                    <GuaranteeCard img={icCreditCard}
                                   title={guaranteeCardPaymentTitle}
                                   content={guaranteeCardPaymentContent}/>
                    <GuaranteeCard img={icDelivery}
                                   title={guaranteeCardDeliveryTitle}
                                   content={guaranteeCardDeliveryContent}/>
                </div>
            </div>
        </section>
    )
};

export default Guarantee;