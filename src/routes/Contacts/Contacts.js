import React from 'react';
import s from './Contacts.module.scss';
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import SocialButton from "../../components/libs/buttons/SocialButton/SocialButton";
import iconTelegram from '../../assets/img/svg/telegram.svg';
import iconViber from '../../assets/img/svg/viber-brands.svg';
import iconWhatsApp from '../../assets/img/svg/whatsapp-brands.svg';
import ContactFormik from "../../components/ui/contacts/ContactFormik/ContactFormik";

const Contacts = () => {
    /*https://youtu.be/b5qHbsSNmHM?t=6726*/
    return (
        <section className={s.contacts}>
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
                    <div className={s.support}>
                        <p>
                            <b>Тех поддержка онлайн: </b>
                            ПН-ПТ с 10:00 до 17:00
                        </p>
                    </div>
                    <div className={s.btn}>
                        <button>Связаться</button>
                    </div>
                    <div>
                        <p>
                            <b>График работы: </b><br/>
                            понедельник-пятница с 10:00 до 17:00
                        </p>
                        <p>
                            <b>Отправка ключей: </b><br/>
                            автоматически и круглосуточно
                        </p>
                    </div>
                </div>
                <ContactFormik/>
            </div>
        </section>
    )
};

export default Contacts;