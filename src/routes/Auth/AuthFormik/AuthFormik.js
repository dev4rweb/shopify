import React from 'react';
import s from './AuthFormik.module.scss';
import {Field, Formik} from "formik";
import FormikCheckbox from "../../../components/libs/CusttomCheckboxes/FormikCheckbox/FormikCheckbox";
import GradientButton from "../../../components/ui/GradientButton/GradientButton";

const AuthFormik = (props) => {
    const lang = props.lang;
    const data = props.data;
    const iLogin = data.iLogin[lang];
    const iEmail = data.iEmail[lang];
    const forgotMsg = data.forgotMsg[lang];
    const brnLogin = data.brnLogin[lang];

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
                               type={`text`} placeholder={iLogin}/>
                        <Field className={s.email} name={`email`}
                               type={`email`} placeholder={iEmail}/>
                        <div className={s.agreementBox}>
                            <FormikCheckbox
                                className={s.checkbox}
                                handleChange={handleChange}
                                values={values.isRobots}
                                lang={lang}
                                data={data.cbRobots}
                            />
                            <a className={s.agree} href="#">{forgotMsg}</a>
                        </div>
                        <GradientButton
                            className={s.button}
                            name={brnLogin}/>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AuthFormik;