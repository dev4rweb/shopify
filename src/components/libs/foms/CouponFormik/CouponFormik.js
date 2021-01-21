import React from "react";
import s from './CouponFormik.module.scss'
import { Formik, Field, Form } from "formik";

const CouponFormik = () => {
    return (
        <div className={s.couponFormik}>
            <Formik
                initialValues={{email: ""}}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}>
                <Form>
                    <Field name="email" type="email" placeholder={`Your email address`}/>
                    <button type="submit">Activate coupon</button>
                </Form>
            </Formik>
        </div>
    )
};

export default CouponFormik;