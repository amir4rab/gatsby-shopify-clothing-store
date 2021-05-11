import React from 'react';

import {
    // BrowserView,
    // MobileView,
    isDesktop,
    isMobile
} from "react-device-detect";

import NavbarMobile from './navbarMobile/navbarMobile.component';
import NavbarDesktop from './navbarDesktop/navbarDesktop.component';

import './layout.scss';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const Layout = ({ children }) => {
    console.log(`isDesktop: ${isDesktop}, isMobile: ${isMobile}`);

    return (
        <main className={ "layout" }>
            {
                isMobile ?
                    <section>
                        { children }
                        <NavbarMobile />
                    </section>
                :
                    <section className="browserView">
                        { children }
                        <NavbarDesktop />
                    </section>
            }
        </main>
    );
};

export default Layout;
