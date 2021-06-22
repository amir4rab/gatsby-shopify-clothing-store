import React, { useState } from 'react';

import ColorSelectorComponent from './colorSelector/colorSelector.component';
import SizeSelectorComponent from './sizeSelector/sizeSelector.component';

import * as classes from './variantSelector.module.scss';

const makeVarients = (inputArr) => {
    const resObj = {
        colors: [],
        sizes: []
    };

    inputArr.forEach(item => {
        const splitedItem = item.title.split(' / ');
        if( !resObj.sizes.includes(splitedItem[0]) ) resObj.sizes.push(splitedItem[0]);
        if( !resObj.colors.includes(splitedItem[1]) ) resObj.colors.push(splitedItem[1]);
    })

    return resObj;
}

const getActiveVariantObj = ( inputArr ,size, color ) => {
    const query = `${size} / ${color}`;

    return inputArr.find(varient => varient.title === query);
}

const getDetails = (variant) => {
    const splitedItem = variant.title.split(' / ');

    return ({
        size: splitedItem[0],
        color: splitedItem[1],
    })
}

const VariantSelectorComponent = ({ varientsArr, setActiveVarient, activeVarient }) => {
    const [ varientsState ] = useState(makeVarients(varientsArr));

    const setActiveVarientByColor = (color) => {
        setActiveVarient(getActiveVariantObj( varientsArr, getDetails(activeVarient).size , color ));
    }
    
    const setActiveVarientBySize = (size) => {
        setActiveVarient(getActiveVariantObj( varientsArr, size, getDetails(activeVarient).color ));
    }

    return (
        <div className={classes.varientsSelector}>
            <div className={ classes.selector }>
                <ColorSelectorComponent 
                    colorsArr={ varientsState.colors } 
                    acitveColor={ getDetails(activeVarient).color } 
                    setAcitveColor={setActiveVarientByColor}
                />
            </div>
            <div className={ classes.selector }>
                <SizeSelectorComponent 
                    sizesArr={ varientsState.sizes } 
                    acitveSeize={ getDetails(activeVarient).size } 
                    setAcitveSeize={setActiveVarientBySize} 
                />
            </div>
        </div>
    );
};

export default VariantSelectorComponent;
