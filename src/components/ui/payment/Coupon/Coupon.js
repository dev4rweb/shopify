import React from 'react';
import s from './Coupon.module.scss';
import img from '../../../../assets/img/png/coupon.png';
import CouponFormik from "../../../libs/foms/CouponFormik/CouponFormik";

const Coupon = () => {
    return (
        <div className={s.coupon}>
            <div className={s.image}>
                <img src={img} alt={`img`}/>
            </div>
            <CouponFormik/>
        </div>
    )
};

export default Coupon;