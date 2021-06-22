import React, { useState, useRef, useEffect } from 'react';
import { navigate } from 'gatsby';

import arrowBack from './../../../images/icons/arrow_back.svg';
import './../styles/inputStyles.scss';

import { 
    getUserPromise,
} from '../../../utilities/firebase/functions/functions';
import { paymentFn as shopifyPaymentFn } from '../../../utilities/shopify/functions/shopifyBuy';
import LoadingDisplayComponent from '../../loadingDisplay/loadingDisplay.component';

const AddEmailComponent = ({ changePageFn, detailsData, productsDataArr }) => {
    let isMounted = useRef(true);
    const [ errorState, setErrorState ] = useState('');
    const [ userEmail, setUserEmail ] = useState(undefined);
    const [ isLoading, setIsLoading ] = useState(false);
    const emailInputRef = useRef('');
    const emailRepInputRef = useRef('');

    useEffect(_ => {
        getUserPromise()
            .then(res => {
                // console.log(res);

                if(res === undefined || res === null) {
                    setUserEmail(null);
                    return;
                };

                setUserEmail(res.email);
            });
        return () => { isMounted.current = false };
    },[setUserEmail]);

    // console.log(userEmail);

    const checkInputs = _ => {
        if ( emailInputRef.current.value === '' ) {
            setErrorState('pease enter your Email');
            return -1;
        }
        if ( emailRepInputRef.current.value === '' ) {
            setErrorState('pease enter your Email repeat');
            return -1;
        }
        if ( emailInputRef.current.value !== emailRepInputRef.current.value ) {
            setErrorState('your email and email repeat are not equal');
            return -1;
        }
    }

    const onSuccessEvent = () => {
        setIsLoading(false);
        navigate('/checkout/success');
    }

    const onFailEvent = () => {
        setIsLoading(false);
        navigate('/checkout/fail');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if ( checkInputs() === -1 ) return;

        setIsLoading(true);
        shopifyPaymentFn(productsDataArr, detailsData, emailInputRef.current.value)
            .then( _ => {
                if( isMounted.current === false ) return;

                onSuccessEvent();
            })
            .catch( _ => {
                if( isMounted.current === false ) return;

                onFailEvent();
            });
    }

    const submitHandlerWithUserEmail = (e) => {
        e.preventDefault();

        // console.log('runned!');

        setIsLoading(true);
        shopifyPaymentFn(productsDataArr, detailsData, userEmail)
            .then( _ => {
                if( isMounted.current === false ) return;

                onSuccessEvent();
            })
            .catch( _ => {
                if( isMounted.current === false ) return;

                onFailEvent();
            });
    }

    const goBackFn = () => changePageFn(activeIndex => (activeIndex - 1));

    return (
        <div className='inputForm'>
            <div className='heroSection'>
                <button className='goBackButton' onClick={ goBackFn }>
                    <img src={ arrowBack } alt="go back" />
                </button>
                <h1>
                    Shipping info
                </h1>
            </div>
            <div className='inputSection'>
                <div className='inputGroup'>
                    <label htmlFor="emailInput">Email</label>
                    <input ref={ emailInputRef } type="text" id='emailInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="emailRepInput">Repeat your email</label>
                    <input ref={ emailRepInputRef } type="text" id='emailRepInput'/>
                </div>
            </div>
            {
                errorState !== '' ? 
                <div className='errorSection'>
                    <p>
                        { errorState }
                    </p>
                </div> : null
            }
            <div className='submitSection'>
                <button onClick={ e => submitHandler(e) }>
                    Go to Payment
                </button>
                {
                    userEmail === undefined ? 
                    <div className='loading'/> : 
                    <div>
                        {
                            userEmail !== null ?
                            <button 
                                onClick={ e => submitHandlerWithUserEmail(e) }
                                className='secSubmitSection'>
                                Use your Account Email and Go to payment
                            </button> : null
                        }
                    </div>
                }
            </div>
            {
                isLoading ? <div className='loadingDisplay'>
                    <LoadingDisplayComponent />
                </div> : null
            }
        </div>
    );
};

export default AddEmailComponent;
