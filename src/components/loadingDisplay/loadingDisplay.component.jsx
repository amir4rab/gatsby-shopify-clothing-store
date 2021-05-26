import React from 'react';

import * as classes from './loadingDisplay.module.scss';

const LoadingDisplayComponent = () => {
    return (
        <div className={ classes.loadingDisplay }>
            <div className={ classes.loadingAnimation } />
        </div>
    );
};

export default LoadingDisplayComponent;
