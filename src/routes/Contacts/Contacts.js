import React from 'react';
import s from './Contacts.module.scss';
import ComingSoon from "../../components/libs/ComingSoon/ComingSoon";
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import SocialButton from "../../components/libs/buttons/SocialButton/SocialButton";
import iconTelegram from '../../assets/img/svg/telegram.svg';
import iconViber from '../../assets/img/svg/viber-brands.svg';
import iconWhatsApp from '../../assets/img/svg/whatsapp-brands.svg';

const Contacts = () => {
    /*https://youtu.be/b5qHbsSNmHM?t=2004*/
    return (
        <section className={s.contacts}>
            {/*<h1>Контакты</h1>
            <ComingSoon dateString={`Jan 28, 2021 13:00:00`}/>*/}
            <div className={s.wrapper}>
                <Breadcrumbs title={`Контакты, связаться с нами`}/>
                <div className={s.socialWrapper}>
                    <SocialButton
                        image={iconTelegram}
                        title={`Telegram администратор`}
                        text={`Прямая ссылка`}
                        link={`https://t.me/SOFTKEYDOG`}/>
                    <SocialButton
                        image={iconTelegram}
                        title={`Telegram техническая поддержка`}
                        text={`Прямая ссылка`}
                        link={`https://t.me/softkeydog_bot`}/>
                    <SocialButton
                        image={iconViber}
                        title={`Viber`}
                        text={`Прямая ссылка`}
                        link={`viber://chat/?number=%B380682168881`}/>
                    <SocialButton
                        image={iconWhatsApp}
                        title={`WhatsApp`}
                        text={`Прямая ссылка`}
                        link={`whatsapp://send?phone=380682168881`}/>
                </div>
                <div className={s.contactContainer}>
                    <p className={s.support}>
                        <b>Тех поддержка онлайн: </b><br/>
                        ПН-ПТ с 10:00 до 17:00
                    </p>
                    <button>Связаться</button>
                    <p>
                        <b>График работы: </b>
                        понедельник-пятница с 10:00 до 17:00<br/>
                        <b>Отправка ключей: </b>
                        автоматически и круглосуточно
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Contacts;