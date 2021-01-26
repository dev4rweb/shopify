import React from 'react';
import s from './RegisterFormik.module.scss';
import {Field, Formik} from "formik";
import FormikCheckbox from "../../../components/libs/CusttomCheckboxes/FormikCheckbox/FormikCheckbox";
import GradientButton from "../../../components/ui/GradientButton/GradientButton";

const RegisterFormik = () => {
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
                               type={`email`} placeholder={`Ваш email`}/>
                        <Field className={s.login} name={`login`}
                               type={`text`} placeholder={`Ваш логин`}/>
                        <Field className={s.password} name={'password'}
                               type={'password'} placeholder={`Ваш пароль`}/>
                        <Field className={s.password} name={`confirmPassword`}
                               type={'password'} placeholder={`Повторить пароль`}/>
                        <div className={s.agreementBox}>
                            <FormikCheckbox className={s.checkbox} handleChange={handleChange}
                                            values={values.isRobots}/>
                            <a className={s.agree} href="#">Политика конфиденциальности</a>
                        </div>
                        <GradientButton className={s.button} name={`Зарегистрироваться`}/>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default RegisterFormik;