import React from 'react';
import s from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
    return (
        <div className={s.breadcrumbs}>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>Ключи Windows 10 PRO</li>
                </ul>
                <span>☰</span>
            </div>
            <hr/>
        </div>
    )
};

export default Breadcrumbs;