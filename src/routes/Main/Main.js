import React, {useEffect} from 'react';
import s from './Main.module.scss';
import InfoCard from "../../components/ui/main/InfoCard/InfoCard";
import imgSupport from './../../assets/img/svg/support.svg';
import imgAutomatic from './../../assets/img/svg/automatic.svg';
import imgCard from './../../assets/img/svg/credit-card.svg';
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import Cards from "../../components/libs/ProductCards/Cards";
import Client from 'shopify-buy';
import ContextData from "../../context/Data/ContextData";

const Main = (props) => {

    /*https://github.com/Shopify/js-buy-sdk*/
    /*yarn add shopify-buy*/
    const client = Client.buildClient({
        storefrontAccessToken: 'bd14e50edce31aa6b246e2daf334ef2a',
        domain: 'testsoftkey.myshopify.com'
    });

    const {stateData, dispatchData} = React.useContext(ContextData);
    const products = stateData.products;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                client.product.fetchAll()
                    .then((res) => {
                        const result = res;
                        dispatchData({
                            type: 'FETCH_PRODUCTS',
                            payload: result
                        });
                        // console.log(res);
                    });
            } catch (e) {
                console.log(e);
            }
        };
        fetchProducts();
    }, []);

    let lang = stateData.lang;
    const infoCard = stateData.infoCard;
    let support = infoCard.support[lang] || `Тех Поддержка`;
    let online = infoCard.online[lang] || 'онлайн';
    let automatic = infoCard.automatic[lang] || 'Автоматическая';
    let send = infoCard.send[lang] || `отправка ключей`;
    let pay = infoCard.pay[lang] || `Все виды оплаты`;
    let breadcrumbs = stateData.breadcrumbs.mainPage[lang] || 'Ключи Windows 10 PRO';

    return (
        <section className={s.main}>
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
                <Cards products={products} client={client}/>

            </div>
        </section>
    )
};

export default Main;