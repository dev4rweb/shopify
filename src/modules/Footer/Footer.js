import React from 'react';
import s from './Footer.module.scss'

const Footer = React.forwardRef((props, ref) => (
    <footer className={s.footer}>
        <div ref={ref} className={s.container}>
            Footer
        </div>
    </footer>
));

export default Footer