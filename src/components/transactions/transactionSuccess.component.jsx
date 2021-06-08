import React from 'react';

import './transaction.scss';

const TransactionSuccessComponent = () => {
    return (
        <div className='transactionComponent'>
            <div className='title'>
                <h1>
                    Success!
                </h1>
            </div>
            <div className='details'>
                <p className='main'>
                    If you completed your purchase in the shopify payment, you will get an email soon!
                </p>
                <p className='sub'>
                    If you didnt see our email, check the spam box.
                </p>
            </div>
        </div>
    );
};

export default TransactionSuccessComponent;
