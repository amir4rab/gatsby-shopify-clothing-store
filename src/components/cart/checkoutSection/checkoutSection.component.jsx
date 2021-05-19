import React, { useState, useEffect } from 'react';

import * as classes from './checkoutSection.module.scss';

const getTotalPrice = (dataArr) => dataArr.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.ammount * currentValue.data.price)
    }, 0);

const CheckoutSectionComponent = ({ dataArr }) => {
    const [ totalPrice, setTotalPrice ] = useState(getTotalPrice(dataArr));

    useEffect(_ => {
        setTotalPrice(getTotalPrice(dataArr));
    }, [ setTotalPrice ,getTotalPrice, dataArr ])

    console.log(`totalPrice`, totalPrice)

    return (
        <div className={ classes.checkoutSection }>
            <div className={ classes.details }>
                <p>
                    Total
                </p>
                <p>
                    {totalPrice} €
                </p>
            </div>
            <div className={ classes.checkOutBtn }>
                <button>
                    Check out
                </button>
            </div>
        </div>
    );
};

export default CheckoutSectionComponent;
