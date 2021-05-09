import React from 'react';

import {
    BrowserView,
    MobileView,
} from "react-device-detect";

import NavbarMobile from './navbarMobile/navbarMobile.component';
import NavbarDesktop from './navbarDesktop/navbarDesktop.component';

import './layout.scss';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const Layout = ({ children }) => {
    return (
        <main className={ "layout" }>
            <BrowserView>
                <section className="browserView">
                    { children }
                    <NavbarDesktop />
                </section>
            </BrowserView>
            <MobileView>
                <section>
                    { children }
                    <NavbarMobile />
                </section>
            </MobileView>
        </main>
    );
};

export default Layout;
