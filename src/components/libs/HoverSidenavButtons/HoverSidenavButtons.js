import React from 'react';
import s from './HoverSidenavButtons.module.scss';
import ContextData from "../../../context/Data/ContextData";

const HoverSidenavButtons = () => {

    const {stateData, dispatchData} = React.useContext(ContextData);

    const handleClick = (ev, category) => {
        ev.preventDefault();
        console.log(category);
        dispatchData({
            type: "FILTER_BY_CATEGORY",
            payload: category
        })
    };

    return (
        <div className={s.sidenav}>
            <div className={s.item}>
                <a
                    href="#"
                    className={s.windows}
                    onClick={(ev)=> handleClick(ev, 'Windows')}
                >
                    <p>Windows</p>
                </a>
            </div>
            <div className={s.item}>
                <a
                    href="#"
                    className={s.adobe}
                    onClick={(ev)=> handleClick(ev, 'Adobe')}
                >
                    <p>Adobe</p>
                </a>
            </div>
            <div className={s.item}>
                <a
                    href="#"
                    className={s.antivirus}
                    onClick={(ev)=> handleClick(ev, 'Antivirus')}
                >
                    <p>Antivirus</p>
                </a>
            </div>
            <div className={s.item}>
                <a
                    href="#"
                    className={s.sever}
                    onClick={(ev)=> handleClick(ev, 'Server')}
                >
                    <p>Server PO</p>
                </a>
            </div>
        </div>
    )
};

export default HoverSidenavButtons;