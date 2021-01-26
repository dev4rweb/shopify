import React from 'react';
import s from './AuthFormik.module.scss';
import {Field, Formik} from "formik";
import FormikCheckbox from "../../../components/libs/CusttomCheckboxes/FormikCheckbox/FormikCheckbox";
import GradientButton from "../../../components/ui/GradientButton/GradientButton";

const AuthFormik = () => {
    return (
        <div className={s.authFormik}>
            <Formik
                initialValues={{login: "", emaii: "", isRobots: false}}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field className={s.login} name={`login`}
                        type={`text`} placeholder={`Ваш логин`}/>
                        <Field className={s.email} name={`email`}
                        type={`email`} placeholder={`Ваш email`}/>
                        <div className={s.agreementBox}>
                            <FormikCheckbox className={s.checkbox} handleChange={handleChange} values={values.isRobots}/>
                            <a className={s.agree} href="#">Забыли пароль?</a>
                        </div>
                        <GradientButton className={s.button} name={`Авторизоваться`}/>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AuthFormik;