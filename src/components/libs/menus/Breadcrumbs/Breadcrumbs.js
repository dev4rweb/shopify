import React from 'react';
import s from './Breadcrumbs.module.scss';

const Breadcrumbs = (props) => {
    return (
        <div className={s.breadcrumbs}>
            <div>
                <ul>
                    <li><a href={`/`}>Home</a></li>
                    <li>{props.title}</li>
                </ul>
                <span>☰</span>
            </div>
            <hr/>
        </div>
    )
};

export default Breadcrumbs;