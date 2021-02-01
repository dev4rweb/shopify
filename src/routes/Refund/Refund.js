import React from 'react';
import s from './Refund.module.scss';
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import image from '../../assets/img/png/refund.png';
import RefundFormik from "../../components/ui/refund/RefundFormik/RefundFormik";
import ContextData from "../../context/Data/ContextData";

const Refund = () => {
    const {stateData, dispatchData} = React.useContext(ContextData);
    let lang = stateData.lang;
    let breadcrumbs = stateData.breadcrumbs.refundPage[lang] ||
        'Обмен и возврат';
    let firstBlock = stateData.refundPage.firstBlock[lang] || 'text';
    let secondBlock = stateData.refundPage.secondBlock[lang] || 'text';
    let formTitle = stateData.refundPage.formTitle[lang] || 'text';
    return (
        <section className={s.refund}>
            <div className={s.wrapper}>
                <Breadcrumbs title={breadcrumbs}/>
                <div className={s.imgContainer}>
                    <p>{firstBlock}</p>
                    <img src={image} alt="image"/>
                </div>
                <div className={s.content}>
                    <p>{secondBlock}</p>
                </div>
                <p>{formTitle}</p>
                <RefundFormik
                    lang={lang}
                    data={stateData.refundPage.formContent}
                />
            </div>
        </section>
    )
};

export default Refund;