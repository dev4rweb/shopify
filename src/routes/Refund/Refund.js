import React from 'react';
import s from './Refund.module.scss';
import Breadcrumbs from "../../components/libs/menus/Breadcrumbs/Breadcrumbs";
import image from '../../assets/img/png/refund.png';
import RefundFormik from "../../components/ui/refund/RefundFormik/RefundFormik";

const Refund = () => {
    return (
        <section className={s.refund}>
            <div className={s.wrapper}>
                <Breadcrumbs title={`Обмен и возврат`}/>
                <div className={s.imgContainer}>
                    <p>Все лицензии проходят валидацию онлайн на сервере Microsoft, поэтому ключи активируются в 100%
                        случаев. Если активация по каким-то причинам не происходит, Вам необходимо сделать фотографию
                        экрана Вашего ПК, где виден номер ключа, версия ПО и сообщение об ошибке, и отправить нам на
                        е-меил, который указан в письме с ключом активации или в онлайн чат техподдержки. Техническая
                        поддержка в рабочее время реагирует на обращение в течение 10-15 минут и всегда успешно решает
                        любые вопросым</p>
                    <img src={image} alt="image"/>
                </div>
                <div className={s.content}>
                    <p>В случае если Вы приобрели ключ, и хотите его вернуть - данная процедура невозможна, согласно
                        постановления Кабинета Министров Украины от 19 марта 1994 № 172, поскольку интернет-магазин не
                        может проверить ключ на предмет его активации.</p>
                </div>
                <p>Подать заявление на возврат товара</p>
                <RefundFormik/>
            </div>
        </section>
    )
};

export default Refund;