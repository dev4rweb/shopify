import React from 'react';
import s from './Contacts.module.scss';
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import SocialButton from "../../components/libs/buttons/SocialButton/SocialButton";
import iconTelegram from '../../assets/img/svg/telegram.svg';
import iconViber from '../../assets/img/svg/viber-brands.svg';
import iconWhatsApp from '../../assets/img/svg/whatsapp-brands.svg';
import ContactFormik from "../../components/ui/contacts/ContactFormik/ContactFormik";
import ContextData from "../../context/Data/ContextData";

const Contacts = () => {
    const {stateData} = React.useContext(ContextData);
    let lang = stateData.lang;
    let breadcrumbs = stateData.breadcrumbs.contactPage[lang] ||
        'Контакты, связаться с нами';

    /*SOCIAL VARS START*/
    let tAdmin = stateData.socialButtons.tAdmin.title[lang];
    let tDirect = stateData.socialButtons.tDirect[lang];
    let tAdminLink = stateData.socialButtons.tAdmin.link;

    let tSupport = stateData.socialButtons.tSupport.title[lang];
    let tSupportLink = stateData.socialButtons.tSupport.link;

    let viber = stateData.socialButtons.viber.title;
    let viberLink = stateData.socialButtons.viber.link;

    let whatsApp = stateData.socialButtons.whatsApp.title;
    let whatsAppLink = stateData.socialButtons.whatsApp.link;
    /*SOCIAL VARS END*/

    /*WORK BLOCK START*/
    let techSup = stateData.contactPage.techSup[lang] || 'text';
    let btnSup = stateData.contactPage.btnSup[lang] || 'text';
    let techSupport = stateData.contactPage.techSupport[lang] || 'text';
    let keys = stateData.contactPage.keys[lang] || 'text';
    /*WORK BLOCK END*/
    return (
        <section className={s.contacts}>
            <div className={s.wrapper}>
                <Breadcrumbs title={breadcrumbs}/>
                <div className={s.socialWrapper}>
                    <SocialButton
                        image={iconTelegram}
                        title={tAdmin}
                        text={tDirect}
                        link={tAdminLink}/>
                    <SocialButton
                        image={iconTelegram}
                        title={tSupport}
                        text={tDirect}
                        link={tSupportLink}/>
                    <SocialButton
                        image={iconViber}
                        title={viber}
                        text={tDirect}
                        link={viberLink}/>
                    <SocialButton
                        image={iconWhatsApp}
                        title={whatsApp}
                        text={tDirect}
                        link={whatsAppLink}/>
                </div>
                <div className={s.contactContainer}>
                    <div className={s.support}>
                        <p dangerouslySetInnerHTML={{__html: techSup}}/>
                    </div>
                    <div className={s.btn}>
                        <button>
                            <a
                                href="https://t.me/softkeydog_bot"
                                target={`_blank`}
                            >
                                {btnSup}
                            </a>
                        </button>
                    </div>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: techSupport}}/>
                        <p dangerouslySetInnerHTML={{__html: keys}}/>
                    </div>
                </div>
                <ContactFormik data={stateData.contactFormik} lang={lang}/>
            </div>
        </section>
    )
};

export default Contacts;