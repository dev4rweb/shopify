import React from 'react';
import s from './About.module.scss';
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import image from "../../assets/img/png/about-page.png";
import GradientButton from "../../components/ui/GradientButton/GradientButton";
import ContextData from "../../context/Data/ContextData";

const About = () => {
    const {stateData} = React.useContext(ContextData);
    let lang = stateData.lang;
    let breadcrumbs = stateData.breadcrumbs.aboutPage[lang] ||
        'Обмен и возврат';
    let firstBlock = stateData.aboutPage.firstBlock[lang] || 'text';
    let secondBlock = stateData.aboutPage.secondBlock[lang] || 'text';
    let btnText = stateData.aboutPage.btnText[lang] || 'text';
    return (
        <section className={s.about}>
            <div className={s.wrapper}>
                <Breadcrumbs title={breadcrumbs}/>
                <div className={s.imgWrapper}>
                    <img src={image} alt="img"/>
                </div>
                <p>{firstBlock}</p>
                <p>{secondBlock}</p>
                <div>
                    <GradientButton name={btnText}/>
                </div>
            </div>
        </section>
    )
};

export default About;