import React, {useRef} from 'react';
import s from './ContactFormik.module.scss';
import ReactDOM from "react-dom";
import {Formik, Field, Form} from "formik";
import GradientButton from "../../GradientButton/GradientButton";
import ReactCheckbox from "../../../libs/CusttomCheckboxes/ReactCheckbox/ReactCheckbox";
import Checkbox from "react-custom-checkbox";
import FormikCheckbox from "../../../libs/CusttomCheckboxes/FormikCheckbox/FormikCheckbox";

const ContactFormik = (props) => {
    /*https://formik.org/docs/examples/checkboxes*/
    /*https://www.w3schools.com/howto/howto_css_custom_checkbox.asp*/
    /*https://ru.reactjs.org/docs/refs-and-the-dom.html*/

    let lang = props.lang;
    let iLogin = props.data.iLogin[lang] || 'text';
    let iEmail = props.data.iEmail[lang] || 'text';
    let tRobots = props.data.tRobots[lang] || 'text';
    let taMsg = props.data.taMsg[lang] || 'text';
    let brnSend = props.data.brnSend[lang] || 'text';

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
                        <Field className={s.login} name="login"
                               type="text" placeholder={iLogin}/>
                        <Field className={s.email} name="email"
                               type="email" placeholder={iEmail}/>
                        <div className={s.agreementBox}>
                            <FormikCheckbox
                                className={s.checkbox}
                                handleChange={handleChange}
                                values={values.isRobots}
                                lang={lang} data={props.data.cbRobots}
                            />
                            <a className={s.agree} href="#">{tRobots}</a>
                        </div>
                        <Field className={s.textarea} name="text" component="textarea"
                               placeholder={taMsg}/>
                        <GradientButton className={s.button} name={brnSend}/>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactFormik;