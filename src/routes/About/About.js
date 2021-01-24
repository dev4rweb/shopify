import React from 'react';
import s from './About.module.scss';
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import image from "../../assets/img/png/about-page.png";
import GradientButton from "../../components/ui/GradientButton/GradientButton";

const About = () => {
    return (
        <section className={s.about}>
            <div className={s.wrapper}>
                <Breadcrumbs title={`Немного о нас`}/>
                <div className={s.imgWrapper}>
                    <img src={image} alt="img"/>
                </div>
                <p>Наша компания работает с 2016 года в сфере создания и интеграции
                мобильного ПО для корпоративного сектора и коммерческих предприятий</p>
                <p>2020 года наша компания под брендом "SoftKey" начала оказывать
                услуги по продаже всего спектра продукции компании Microsoft:
                Windows, Office, Server и прочих решенийю В нашей команде собраны
                настоящие эксперты в своей отрасли, которые готовы предложить
                наилучшее решение для оптимизации Вашего ПО</p>
                <div>
                    <GradientButton name={`Отзывы о нас`}/>
                </div>
            </div>
        </section>
    )
};

export default About;