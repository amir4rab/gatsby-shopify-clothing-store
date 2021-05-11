import React, { memo } from 'react';

import backIcon from '../../../images/icons/arrow_back.svg';
import * as classes from './gobackButton.module.scss';

const GobackButton = memo(() => {
    const eventHandler = () => window.history.back();

    return (
        <button className={ classes.gobackButton } onClick={eventHandler}>
            <img src={backIcon} alt="back" />
        </button>
    );
});

export default GobackButton;
