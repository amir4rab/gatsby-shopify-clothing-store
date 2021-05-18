import React, { memo } from 'react';

import addShoppingCartIcon from '../../../images/icons/black/add_shopping_cart.svg';

import * as classes from './addToCartButton.module.scss'

const AddToCartButton = memo(({ onClick }) => 
    (
        <button
            onClick={onClick}
            className={ classes.addToCartButton }>
            <p className={ classes.text }>
                Add to Cart
            </p>
            <img className={ classes.icon } src={addShoppingCartIcon} alt="Add to shopping cart"/>
        </button>
    )
);

export default AddToCartButton;
