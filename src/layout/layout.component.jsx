import React from 'react';

import NavbarComponent from './navbar/navbar.component';

import './layout.scss';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const Layout = ({ children }) => {
    return (
        <main className={ "layout" }>
            <section className={ "inner" }>
                <NavbarComponent />
                { children }
            </section>
        </main>
    );
};

export default Layout;
