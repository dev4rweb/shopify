import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const menuUrls = ['guarantee', 'payment', 'refund', 'about', 'contacts'];
    let header = null, footer = null, menu = null;

    const refMenu = React.createRef();

    function collapse(e, data) {
        if (window.innerWidth < 768) {
            menu.click();
        }
        // console.log('width - ' + window.innerWidth + ' data - ' + data);
        changeStylesOfItem(header, footer, menu, data);
    }

    function resetAllItemsStyles(header, footer, menu) {
        header.style = 'border-bottom-right-radius: 0px;';
        footer.style = 'border-top-right-radius: 0px;';
        let items = menu.childNodes;
        items.forEach((item) => {
            item.classList.remove(s.active);
            item.classList.remove(s.prevOfActive);
            item.classList.remove(s.nextOfActive);
        });
    }

    function setItemsClasses(header, footer, items, page, index) {
        // console.log(index);
        if (page.includes('home')) {
            header.style = 'border-bottom-right-radius: 25px;';
            items[0].classList.add(s.active);
            items[1].classList.add(s.nextOfActive);
        } else if (page.includes('contacts')) {
            footer.style = 'border-top-right-radius: 25px;';
            items[5].classList.add(s.active);
            items[4].classList.add(s.prevOfActive);
        } else {
            items[index + 1].classList.add(s.active);
            items[index].classList.add(s.prevOfActive);
            items[index + 2].classList.add(s.nextOfActive);
        }
    }

    function changeStylesOfItem(header, footer, menu, currentPage) {
        let page = 'home';
        let index = 0;
        resetAllItemsStyles(header, footer, menu);
        let items = menu.childNodes;
        // console.log('items.length '+items.length);
        for (let i = 0; i <= menuUrls.length; i++) {
            if (currentPage.includes(menuUrls[i])) {
                // console.log(menuUrls[i] + ' include ' + currentPage);
                page = menuUrls[i];
                index = i;
            }
        }
        setItemsClasses(header, footer, items, page, index);
    }

    function navbarLoaded() {
        // console.log('Navbar Loaded loaded');
        const getHeaderFooter = setInterval(function () {
            header = props.headerRef.current;
            footer = props.footerRef.current;
            menu = refMenu.current;
            let currentUrl = document.URL;
            if (header != null && footer != null && menu != null) {
                clearInterval(getHeaderFooter);
                // console.log('find Header Footer Menu');
                changeStylesOfItem(header, footer, menu, currentUrl);
            }
        }, 100);
    }

    const data = props.data;
    const lang = props.lang;

    let product = data.product[lang] || 'Продукция';
    let guarantee = data.guarantee[lang] || 'Гарантия';
    let payment = data.payment[lang] || 'Оплата и доставка';
    let refund = data.refund[lang] || 'Обмен и возврат';
    let about = data.about[lang] || 'О компании';
    let contacts = data.contacts[lang] || 'Контакты';

    navbarLoaded();

    return (
        <nav className={s.navigation}>
            <input type={`checkbox`} id={s.checkboxMenu}/>
            <label htmlFor={s.checkboxMenu}>
                <ul ref={refMenu}  className={`${s.menu} ${s.touch}`}>
                    <li>
                        <NavLink to={`/`} onClick={((e) => collapse(e, 'home'))}
                                 exact
                                 activeClassName={s.active_link}>
                            {product}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/guarantee`}
                                 onClick={((e) => collapse(e, 'guarantee'))}
                                 activeClassName={s.active_link}>
                            {guarantee}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/payment`}
                                 onClick={((e) => collapse(e, 'payment'))}
                                 activeClassName={s.active_link}>
                            {payment}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/refund`} onClick={((e) => collapse(e, 'refund'))}
                                 activeClassName={s.active_link}>
                            {refund}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/about`}
                                 onClick={((e) => collapse(e, 'about'))}
                                 activeClassName={s.active_link}>
                        {about}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/contacts`}
                                 onClick={((e) => collapse(e, 'contacts'))}
                                 activeClassName={s.active_link}>
                            {contacts}
                        </NavLink>
                    </li>
                </ul>
                <span className={s.toggle}>☰</span>
            </label>
        </nav>
    )
};

export default Navbar;