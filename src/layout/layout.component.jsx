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
            { children }
            <BrowserView>
                <NavbarDesktop />
            </BrowserView>
            <MobileView>
                <NavbarMobile />
            </MobileView>
        </main>
    );
};

export default Layout;
