import React from 'react';

import MobileHome from './mobileHome/mobileHome.component';

import * as classes from './home.module.scss';
import BrowserHome from './browserHome/browserHome.component';

function HomeComponent() {
    return (
        <div className={ classes.homeComponent }>
            <h1 className={ classes.title }>
                St Clothing
            </h1>
            <div className={ classes.mobile } >
                <MobileHome />
            </div>
            <div className={ classes.browser } >
                <BrowserHome />
            </div>
        </div>
    );
};

export default HomeComponent;
