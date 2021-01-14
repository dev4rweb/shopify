import React from 'react';
import s from './Profile.module.scss';
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Profile = () => {
    return (
        <section className={s.profile}>
            <h1>Профайл</h1>
            <ComingSoon id={`csProfile`} dateString={`Jan 30, 2021 13:00:00`}/>
        </section>
    )
};

export default Profile;