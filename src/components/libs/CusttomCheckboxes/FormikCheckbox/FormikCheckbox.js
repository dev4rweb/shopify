import React from 'react';
import s from './FormikCheckbox.module.scss';
import Checkbox from "react-custom-checkbox";
import {Field} from "formik";
import imgCheck from '../../../../assets/img/png/ic-checkbox.png';

const FormikCheckbox = (props) => {
    return (
        <div className={s.formikCheckbox}>
            <Checkbox type="checkbox" name="isRobots" checked={props.values}
                      icon={<img src={imgCheck} alt="check"/>}
                      borderColor="#c4cadd"
                      borderRadius={27}
                      style={{backgroundColor: '#d5e0e8'}}
                      size={50}
                      label={'Я не робот!'}
                      labelStyle={{ marginLeft: 60, userSelect: "none", color: '#95a0c2' }}
            />
            <Field type="checkbox" name="isRobots"
                   onChange={props.handleChange} className={s.hidden}/>
        </div>
    )
};

export default FormikCheckbox;