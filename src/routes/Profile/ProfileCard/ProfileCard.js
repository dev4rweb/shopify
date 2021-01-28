import React from 'react';
import s from './ProfileCard.module.scss';
import userImg from '../../../assets/img/png/user.png';

const ProfileCard = () => {
    return (
        <div className={s.profileCard}>
            <div className={s.info}>
                <img src={userImg} alt="avatar"/>
                <div className={s.userInfo}>
                    <h6>DesHellArt</h6>
                    <p>Имя: <b>Des</b></p>
                    <p>Фамилия: <b>Hell</b></p>
                    <p>Дата регистрации: <b>12.11.2020</b></p>
                </div>
            </div>
            <div className={s.btnWrapper}>
                <button>Написать сообщение</button>
                <button>Связь с поддержкой</button>
            </div>
        </div>
    )
};

export default ProfileCard;