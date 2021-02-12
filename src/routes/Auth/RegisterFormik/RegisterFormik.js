import React from 'react';
import s from './RegisterFormik.module.scss';
import {Field, Formik} from "formik";
import FormikCheckbox from "../../../components/libs/CusttomCheckboxes/FormikCheckbox/FormikCheckbox";
import GradientButton from "../../../components/ui/GradientButton/GradientButton";

const RegisterFormik = (props) => {
    const lang = props.lang;
    const data = props.data;
    const iLogin = data.iLogin[lang];
    const iEmail = data.iEmail[lang];
    const password = data.password[lang];
    const passwordConfirm = data.passwordConfirm[lang];
    const tPolitics = data.tPolitics[lang];
    const brnReg = data.brnReg[lang];

    return (
        <div className={s.registerFormik}>
            <Formik
                initialValues={{
                    login: "", email: "",
                    password: "", confirmPassword: "", isRobots: false
                }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field className={s.email} name={`email`}
                               type={`email`} placeholder={iEmail}/>
                        <Field className={s.login} name={`login`}
                               type={`text`} placeholder={iLogin}/>
                        <Field className={s.password} name={'password'}
                               type={'password'} placeholder={password}/>
                        <Field className={s.password} name={`confirmPassword`}
                               type={'password'} placeholder={passwordConfirm}/>
                        <div className={s.agreementBox}>
                            <FormikCheckbox
                                className={s.checkbox}
                                handleChange={handleChange}
                                values={values.isRobots}
                                lang={lang}
                                data={data.cbRobots}
                            />
                            <a href={`/`} className={s.agree}>
                                {tPolitics}
                            </a>
                        </div>
                        <GradientButton
                            className={s.button}
                            name={brnReg}/>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default RegisterFormik;