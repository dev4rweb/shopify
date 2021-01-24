import React, {useRef} from 'react';
import s from './ContactFormik.module.scss';
import ReactDOM from "react-dom";
import {Formik, Field, Form} from "formik";
import GradientButton from "../../GradientButton/GradientButton";
import ReactCheckbox from "../../../libs/CusttomCheckboxes/ReactCheckbox/ReactCheckbox";
import Checkbox from "react-custom-checkbox";
import FormikCheckbox from "../../../libs/CusttomCheckboxes/FormikCheckbox/FormikCheckbox";

const ContactFormik = () => {
    /*https://formik.org/docs/examples/checkboxes*/
    /*https://www.w3schools.com/howto/howto_css_custom_checkbox.asp*/
    /*https://ru.reactjs.org/docs/refs-and-the-dom.html*/
    return (
        <div className={s.contactFormik}>
            <Formik
                initialValues={{login: "", email: "", isRobots: true, text: ""}}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));

                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field className={s.login} name="login" type="text" placeholder={`Ваш логин`}/>
                        <Field className={s.email} name="email" type="email" placeholder={`Ваш email`}/>
                        <div className={s.agreementBox}>
                            <FormikCheckbox className={s.checkbox} handleChange={handleChange} values={values.isRobots}/>
                            <a className={s.agree} href="#">Правила обращения</a>
                        </div>
                        <Field className={s.textarea} name="text" component="textarea"
                               placeholder={`Ваше сообщение`}/>
                        <GradientButton className={s.button} name={`Отправить сообщение`}/>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactFormik;