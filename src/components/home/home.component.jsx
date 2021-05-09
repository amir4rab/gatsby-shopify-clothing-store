import React from 'react';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";

import MobileHome from './mobileHome/mobileHome.component';

import * as classes from './home.module.scss';

function HomeComponent() {
    return (
        <div className={ classes.homeComponent }>
            <h1 className={ classes.title }>
                St Clothing
            </h1>
            <div>
                <BrowserView>
                    Browser content
                </BrowserView>
                <MobileView>
                    <MobileHome />
                </MobileView>
            </div>
        </div>
    );
};

export default HomeComponent;
