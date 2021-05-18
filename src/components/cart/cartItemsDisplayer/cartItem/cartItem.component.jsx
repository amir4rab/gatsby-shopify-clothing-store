import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as classes from './cartItem.module.scss';

const CartItemComponent = ({ data, ammount, removeFn }) => {
    return (
        <div className={ classes.cartItemComponent }>
            <div className={ classes.leftColumn }>
                <GatsbyImage className={ classes.img } image={data.img[0].localFile.childImageSharp.gatsbyImageData} alt={data.title} />
            </div>
            <div className={ classes.rightColumn }>
                <div className={ classes.title }>
                    { data.title }
                </div>
                <div className={ classes.details }>
                    <div className={ classes.row }>
                        <p>
                            { data.varient }
                        </p>
                        <p>
                            { ammount }
                        </p>
                    </div>
                    <div className={ classes.row }>
                        <p className={ classes.price }>
                            { data.price } €
                        </p>
                        <div className={ classes.remove }>
                            <button onClick={ _ => removeFn(data.shopifyId) }>
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemComponent;
