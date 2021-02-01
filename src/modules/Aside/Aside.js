import React from 'react';
import s from './Aside.module.scss';
import HoverSidenavButtons from "../../components/libs/HoverSidenavButtons/HoverSidenavButtons";
import VerticalText from "../../components/libs/VerticalText/VerticalText";

const Aside = (props) => {
    const lang = props.lang;
    const data = props.data;
    let title = data.title[lang] || 'Catalog';
    return (
        <aside className={s.aside}>
            <VerticalText text={title}/>
            <HoverSidenavButtons/>
        </aside>
    )
};

export default Aside