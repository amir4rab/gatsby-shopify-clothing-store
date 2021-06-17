import React from 'react';

import * as classes from './loadingDisplay.module.scss';

const LoadingDisplayComponent = ({ maxWidth = '100vw' }) => {
    return (
        <div className={ classes.loadingDisplay }>
            <div 
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxWidth
                }}
                className={ classes.loadingAnimation } 
            />
        </div>
    );
};

export default LoadingDisplayComponent;
