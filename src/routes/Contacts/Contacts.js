import React from 'react';
import s from './Contacts.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Contacts = () => {
    return (
        <section className={s.contacts}>
            <h1>Контакты</h1>
            <ComingSoon dateString={`Jan 28, 2021 13:00:00`}/>
        </section>
    )
};

export default Contacts;