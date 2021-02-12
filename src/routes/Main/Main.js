import React, {useEffect} from 'react';
import s from './Main.module.scss';
import InfoCard from "../../components/ui/main/InfoCard/InfoCard";
import imgSupport from './../../assets/img/svg/support.svg';
import imgAutomatic from './../../assets/img/svg/automatic.svg';
import imgCard from './../../assets/img/svg/credit-card.svg';
import Promo from "../../components/libs/Promo/Promo";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import Cards from "../../components/libs/ProductCards/Cards";
import ContextData from "../../context/Data/ContextData";

const Main = (props) => {

    let client = props.client;

    /*https://github.com/Shopify/js-buy-sdk*/
    /*yarn add shopify-buy*/
    // const client = Client.buildClient({
    //     storefrontAccessToken: 'bd14e50edce31aa6b246e2daf334ef2a',
    //     domain: 'testsoftkey.myshopify.com'
    // });

    const {stateData, dispatchData} = React.useContext(ContextData);
    const products = stateData.products;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                client.product.fetchAll()
                    .then((res) => {
                        dispatchData({
                            type: 'FETCH_PRODUCTS',
                            payload: res
                        });
                    });
            } catch (e) {
                console.log(e);
            }
        };
        const fetchCheckout = async () => {
            try {
                client.checkout.create()
                    .then((res) => {
                        dispatchData({
                            type: "FETCH_CHECKOUT",
                            payload: res
                        })
                    });
            } catch (e) {
                console.log(e);
            }
        };
        const fetchShop = async () => {
            try {
                client.shop.fetchInfo()
                    .then((res) => {
                        dispatchData({
                            type: "FETCH_SHOP",
                            payload: res
                        })
                        // console.log(client.shop)
                    });
            } catch (e) {
                console.log(e);
            }
        };
        const fetchCollection = async () => {
            try {
                // Fetch all collections, including their products
                client.collection.fetchAllWithProducts()
                    .then((collections) => {
                        dispatchData({
                            type: "FETCH_COLLECTION",
                            payload: collections
                        });
                        /*console.log(collections);
                        console.log(collections[0].products);*/
                    });
            } catch (e) {
                console.log(e);
            }
        };
/*        const fetchConfig = async () => {
            try {
                // Fetch all collections, including their products
                client.config.fetch()
                    .then((config) => {
                        dispatchData({
                            type: "FETCH_CONFIG",
                            payload: config
                        });
                        console.log(config);
                    });
            } catch (e) {
                console.log('fetchConfig = '+e);
                // console.log('fetchConfig = '+client.config);
            }
        };
        const fetchGraph = async () => {
            try {
                // Fetch all collections, including their products
                client.graphQLClient.fetchAll()
                    .then((data) => {
                        dispatchData({
                            type: "FETCH_GRAPH",
                            payload: data
                        });
                        console.log(data);
                    });
            } catch (e) {
                console.log('fetchGraph'+e);
                console.log('fetchGraph'+client.config);
            }
        };
        const createCustomer = async () => {
            const data = [{
                "email": "user@example.com",
                "password": "HiZqFuDvDdQ7"
            }];
            try {
                if (client) {
                    client.checkout.customerCreate.customer(data)
                        .then((res) => {
                            console.log(res)
                        });
                } else {
                    console.log("CLIENT NULL");
                }
            } catch (e) {
                console.log('createCustomer - '+ e);
                // console.log(client.customerCreate());
            }
        };*/

        fetchCheckout();
        fetchProducts();
        fetchShop();
        fetchCollection();
        // createCustomer();
        // fetchConfig();
        // fetchGraph();
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