import React, { memo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as classes from './productDisplayer.module.scss';

const ProductDisplayerComponent = memo(({ dataArr }) => {
    console.log(dataArr.length);

    return (
        <div className={ classes.productDisplayer }>
            <div className={ classes.wrapper }>
                { dataArr.map( item => (
                    <div className={ classes.item } key={ item.shopifyId }>
                        <div className={ classes.image }>
                            <GatsbyImage alt={item.title} image={ item.images[0].localFile.childImageSharp.gatsbyImageData } />
                        </div>
                        <div className={ classes.details }>
                            <p className={ classes.title }>
                                { 
                                    item.title.length > 17 ?
                                    `${item.title.slice(0,14)}...` 
                                    : 
                                    item.title
                                }
                            </p>
                            <p className={ classes.price }>€{ item.priceRange.minVariantPrice.amount }</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
},
(pervProps, nextProps) => {
    console.log(pervProps.dataArr.length, nextProps.dataArr.length);
    if( pervProps.dataArr.length === nextProps.dataArr.length ) {
        // console.log('block 1');
        return true;
    };
    
    if( nextProps.dataArr.length === 0 || pervProps.dataArr.length === 0 ) {
        return false;
    }; 

    let loopResult = true;
    pervProps.dataArr.every((item, i)=>{
        if(item.title !== nextProps.dataArr[i].title){
            loopResult = false;
            return false;
        }
        return true;
    });

    // console.log(`loopResult: ${loopResult}`)
    return loopResult;
});

export default ProductDisplayerComponent;
