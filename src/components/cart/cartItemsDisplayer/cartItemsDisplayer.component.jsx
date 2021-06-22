import React, { useCallback } from 'react';
import CartItemComponent from './cartItem/cartItem.component';
import { Link } from 'gatsby';

import * as classes from './cartItemsDisplayer.module.scss';

const CartItemsDisplayerComponent = ({ dataArr, removeItemFromCartFn }) => {

    const removeFn = useCallback((shopifyId) => {
        removeItemFromCartFn(shopifyId)
    },[removeItemFromCartFn]);

    return (
        <div className={ classes.cartItemsDisplayer }>
            {
                dataArr.length === 0 ?
                <div className={ classes.emptyCart }>
                    Your cart is empty go to <Link to="/">Home</Link> to add items to it!
                </div>
                :
                <div>
                    {
                        dataArr.map(({ data, ammount }) => (
                            <div className={ classes.item }  key={ data.shopifyId }>
                                <CartItemComponent data={ data } ammount={ ammount } removeFn={removeFn} />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default CartItemsDisplayerComponent;
