import React from 'react';

import GobackButton from '../buttons/gobackButton/gobackButton.component';

import * as classes from './about.module.scss';

function AboutComponent() {
    return (
        <div className={ classes.about }>
            <div className={ classes.header }>
                <GobackButton />
                <h1>
                    About
                </h1>
            </div>
            <div className={ classes.content }>
                <p>
                    developed with <span role='img' aria-label='img'>💙</span> by <a href="https://amir4rab.com" target='_'>amir4rab</a>.
                </p>
                <p>
                    feel free to check the websites code on <a href="https://github.com/amir4rab/gatsby-shopify-clothing-store" target='_'>Github</a>.
                </p>
            </div>
        </div>
    );
};

export default AboutComponent;
