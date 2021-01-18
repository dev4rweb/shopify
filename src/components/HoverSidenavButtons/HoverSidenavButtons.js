import React from 'react';
import s from './HoverSidenavButtons.module.scss';

const HoverSidenavButtons = () => {
    return (
        <div className={s.sidenav}>
            <div><a href="#" className={s.windows}><p>Windows</p></a></div>
            <div><a href="#" className={s.adobe}><p>Adobe</p></a></div>
            <div><a href="#" className={s.antivirus}><p>Antivirus</p></a></div>
            <div><a href="#" className={s.sever}><p>Server PO</p></a></div>
        </div>
    )
};

export default HoverSidenavButtons;