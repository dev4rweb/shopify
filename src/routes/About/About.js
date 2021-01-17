import React from 'react';
import s from './About.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const About = () => {
    return (
        <section className={s.about}>
            <h1>О компании</h1>
            <ComingSoon dateString={`Jan 26, 2021 13:00:00`}/>
        </section>
    )
};

export default About;