import React from 'react';
import s from './Footer.module.scss'
import image from './../../assets/img/png/reward.png'
import SelectBox from "../../components/libs/CustomSelects/SelectBox/SelectBox";


const Footer = React.forwardRef((props, ref) => (

    <footer className={s.footer}>
        <div ref={ref} className={s.container}>
            <img className={s.reward} src={image} alt="reward"/>
            <div className={s.lang}>
                <SelectBox
                    name="lang"
                    items={[
                        { value: 'Russia', id: 1 },
                        { value: 'English', id: 2 },
                    ]}
                    changeLanguage={props.changeLanguage}
                    lang={props.lang}
                />
            </div>
        </div>
    </footer>
));

export default Footer