import React from 'react';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import './layout.scss';
import NavbarMobile from './navbarMobile/navbarMobile.component';

const Layout = ({ children }) => {
    return (
        <main className={ "layout" }>
            { children }
            <NavbarMobile />
        </main>
    );
};

export default Layout;
