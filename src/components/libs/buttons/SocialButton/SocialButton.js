import React from 'react';
import s from './SocialButton.module.scss';
import defImage from '../../../../assets/img/png/logo200x200.png';

const SocialButton = (props) => {
    const image = props.image || defImage;
    const title = props.title || 'Title';
    const text = props.text || 'Direct Link';
    const href = props.link || '#';
    return (
        <a href={href} className={s.socialButton} target={`_blank`}>
            <img src={image} alt={`img`}/>
            <div>
                <p>{title}</p>
                <span>{text}</span>
            </div>
        </a>
    );
};

export default SocialButton;