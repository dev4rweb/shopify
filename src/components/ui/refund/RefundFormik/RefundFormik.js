import React from 'react';
import s from './RefundFormik.module.scss';
import { Formik, Field, Form } from "formik";
import GradientButton from "../../GradientButton/GradientButton";

const RefundFormik = (props) => {
    const lang = props.lang;
    const data = props.data;
    let email = data.email[lang] || 'Ваш email';
    let purchase = data.purchase[lang] || 'Номер покупки';
    let btnText = data.btnText[lang] || 'Подать заявление';
    return (
        <div className={s.refundFormik}>
            <Formik
                initialValues={{order: "", email: ""}}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div>
                        <Field name="email" type="email" placeholder={email}/>
                        <Field name="order" type="text" placeholder={purchase}/>
                    </div>
                    <GradientButton name={btnText}/>
                </Form>
            </Formik>
        </div>
    )
};

export default RefundFormik;