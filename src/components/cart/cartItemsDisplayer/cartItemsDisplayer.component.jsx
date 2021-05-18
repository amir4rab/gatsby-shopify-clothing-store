import React, { useCallback } from 'react';
import CartItemComponent from './cartItem/cartItem.component';

import * as classes from './cartItemsDisplayer.module.scss';

const CartItemsDisplayerComponent = ({ dataArr, removeItemFromCartFn }) => {

    const removeFn = useCallback((shopifyId) => {
        removeItemFromCartFn(shopifyId)
    },[removeItemFromCartFn])

    console.log(dataArr);
    return (
        <div className={ classes.cartItemsDisplayer }>
            {
                dataArr.map(({ data, ammount }) => (
                    <div className={ classes.item }  key={ data.shopifyId }>
                        <CartItemComponent data={ data } ammount={ ammount } removeFn={removeFn} />
                    </div>
                ))
            }
        </div>
    );
};

export default CartItemsDisplayerComponent;
