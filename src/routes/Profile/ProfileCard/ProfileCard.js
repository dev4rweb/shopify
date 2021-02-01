import React from 'react';
import s from './ProfileCard.module.scss';
import userImg from '../../../assets/img/png/user.png';

const ProfileCard = (props) => {
    const lang = props.lang || 'ru';
    let fullName = props.data ? props.data.fullName : 'Full name';
    let name = props.data ? props.data.name : 'name';
    let surname = props.data ? props.data.surname : 'surname';
    let regDate = props.data ? props.data.regDate : 'date';
    let tName = props.data ? props.data.tName[lang] : 'text';
    let tSurname = props.data ? props.data.tSurname[lang] : 'text';
    let tRegDate = props.data ? props.data.tRegDate[lang] : 'text';
    let btnSend = props.data ? props.data.btnSend[lang] : 'text';
    let btnSupport = props.data ? props.data.btnSupport[lang] : 'text';
    return (
        <div className={s.profileCard}>
            <div className={s.info}>
                <img src={userImg} alt="avatar"/>
                <div className={s.userInfo}>
                    <h6>{fullName}</h6>
                    <p>{tName}<b>{name}</b></p>
                    <p>{tSurname}<b>{surname}</b></p>
                    <p>{tRegDate}<b>{regDate}</b></p>
                </div>
            </div>
            <div className={s.btnWrapper}>
                <button>{btnSend}</button>
                <button>{btnSupport}</button>
            </div>
        </div>
    )
};

export default ProfileCard;