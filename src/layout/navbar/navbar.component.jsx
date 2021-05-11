import React from 'react';
import NavbarDesktop from '../navbarDesktop/navbarDesktop.component';
import NavbarMobile from '../navbarMobile/navbarMobile.component';

import {
    isDesktop,
    isMobile,
} from "react-device-detect";

import * as classes from './navbar.module.scss'

const NavbarComponent = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbarDesktop}>
                <NavbarDesktop />
            </div>
            <div className={classes.navbarMobile}>
                <NavbarMobile />
            </div>
        </div>
    );
};

export default NavbarComponent;
