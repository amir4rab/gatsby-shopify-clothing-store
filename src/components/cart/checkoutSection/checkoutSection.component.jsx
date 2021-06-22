import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import * as classes from './checkoutSection.module.scss';

const getTotalPrice = (dataArr) => dataArr.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.ammount * currentValue.data.price)
    }, 0);

const CheckoutSectionComponent = ({ dataArr }) => {
    const [ totalPrice, setTotalPrice ] = useState(getTotalPrice(dataArr));

    useEffect(_ => {
        setTotalPrice(getTotalPrice(dataArr));
    }, [ setTotalPrice, dataArr ]);

    return (
        <div>
            {
                dataArr.length === 0 ? 
                null :
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
                        <Link to='/checkout/address'>
                            <button>
                                Check out
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default CheckoutSectionComponent;
