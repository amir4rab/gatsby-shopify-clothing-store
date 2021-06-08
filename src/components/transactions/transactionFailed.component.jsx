import React from 'react';
import { Link } from 'gatsby';

const TransactionFailedComponent = () => {
    return (
        <div className='transactionComponent' >
            <div className='title' >
                <h2>
                    Somthing went wrong
                </h2>
            </div>
            <div className='details' >
                <p className='main' >
                    go back to <Link to='./cart'>cart</Link> to start over!
                </p>
            </div>
        </div>
    );
};

export default TransactionFailedComponent;
