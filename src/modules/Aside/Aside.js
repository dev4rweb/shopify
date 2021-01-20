import React from 'react';
import s from './Aside.module.scss';
import HoverSidenavButtons from "../../components/libs/HoverSidenavButtons/HoverSidenavButtons";
import VerticalText from "../../components/libs/VerticalText/VerticalText";

const Aside = () => {
    return (
        <aside className={s.aside}>
            <VerticalText text="Catalog"/>
            <HoverSidenavButtons/>
        </aside>
    )
};

export default Aside