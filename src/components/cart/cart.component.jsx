import React from 'react';
import { connect } from 'react-redux';

import { removeItem as removeItemFromCartRedux } from '../../redux/shopingCart/shopingCart.actions';
import CartItemsDisplayerComponent from './cartItemsDisplayer/cartItemsDisplayer.component';

import * as classes from './cart.module.scss';
import CheckoutSectionComponent from './checkoutSection/checkoutSection.component';

const CartComponent = ({ 
    cartData,
    removeItemFromCart
}) => {
    return (
        <div className={ classes.cartComponent }>
            <div className={ classes.title }>
                <h1>
                    Cart
                </h1>
            </div>
            <div className={ classes.data }>
                <CartItemsDisplayerComponent removeItemFromCartFn={ removeItemFromCart } dataArr={ cartData.dataArr } />
            </div>
            <div className={ classes.checkOut }>
                <CheckoutSectionComponent dataArr={ cartData.dataArr } />
            </div>
        </div>
    );
};

const mapStatesToProps = state => ({
    cartData: state.shopingCart
});

const mapDispatchProps = dispath => ({
    removeItemFromCart: data => dispath(removeItemFromCartRedux(data))
});

export default connect( mapStatesToProps , mapDispatchProps )(CartComponent);
