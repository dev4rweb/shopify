import React from 'react';
import s from './RefundFormik.module.scss';
import { Formik, Field, Form } from "formik";
import GradientButton from "../../GradientButton/GradientButton";

const RefundFormik = () => {
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
                        <Field name="email" type="email" placeholder={`Ваш email`}/>
                        <Field name="order" type="text" placeholder={`Номер покупки`}/>
                    </div>
                    <GradientButton name={`Подать заявление`}/>
                </Form>
            </Formik>
        </div>
    )
};

export default RefundFormik;