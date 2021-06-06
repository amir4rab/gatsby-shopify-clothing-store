import React, { useRef, useState } from 'react';

import GoBackButton from '../../buttons/gobackButton/gobackButton.component';

import arrowBack from './../../../images/icons/arrow_back.svg';
import './../styles/inputStyles.scss';

const ShippingInfoInputsComponent = ({ setDetailsFn, thisPageIndex, changePageFn, detailsData }) => {
    const [ errorState, setErrorState ] = useState('');

    const countryInputRef = useRef( detailsData.country !== undefined ? detailsData.country : '' );
    const provinceInputRef = useRef( detailsData.province !== undefined ? detailsData.province : '' );
    const zipcodeInputRef = useRef( detailsData.zip !== undefined ? detailsData.zip : '' );
    const cityInputRef = useRef( detailsData.city !== undefined ? detailsData.city : '' );
    const address1InputRef = useRef( detailsData.address1 !== undefined ? detailsData.address1 : '' );
    const address2InputRef = useRef( detailsData.address2 !== undefined ? detailsData.address2 : '' );

    const checkInputs = _ => {
        if ( countryInputRef.current.value === '' ) {
            setErrorState('pease enter your country');
            return -1;
        }
        if ( provinceInputRef.current.value === '' ) {
            setErrorState('pease enter your province');
            return -1;
        }
        if ( zipcodeInputRef.current.value === '' ) {
            setErrorState('pease enter your zipcode');
            return -1;
        }
        if ( cityInputRef.current.value === '' ) {
            setErrorState('pease enter your city');
            return -1;
        }
        if ( address1InputRef.current.value === '' ) {
            setErrorState('pease enter your address 1');
            return -1;
        }
        if ( address2InputRef.current.value === '' ) {
            setErrorState('pease enter your address 2');
            return -1;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if ( checkInputs() === -1 ) return;

        setDetailsFn({
            country: countryInputRef.current.value,
            province: provinceInputRef.current.value,
            zip: zipcodeInputRef.current.value,
            city: cityInputRef.current.value,
            address1: address1InputRef.current.value,
            address2: address2InputRef.current.value,
        }, (thisPageIndex + 1));
    }

    const goBackFn = () => {
        changePageFn( thisPageIndex - 1 );
    }

    return (
        <form className='inputForm'>
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
                    <label htmlFor="countryInput">Country</label>
                    <input 
                        defaultValue={ detailsData.country !== undefined ? detailsData.country : '' } 
                        ref={ countryInputRef } 
                        type="text" 
                        id='countryInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="provinceInput">Province</label>
                    <input 
                        defaultValue={ detailsData.province !== undefined ? detailsData.province : '' } 
                        ref={ provinceInputRef } 
                        type="text" 
                        id='provinceInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="zipcodeInput">Zipcode</label>
                    <input 
                        defaultValue={ detailsData.zip !== undefined ? detailsData.zip : '' } 
                        ref={ zipcodeInputRef } 
                        type="text" 
                        id='zipcodeInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="cityInput">city</label>
                    <input 
                        defaultValue={ detailsData.city !== undefined ? detailsData.city : '' } 
                        ref={ cityInputRef } 
                        type="text" 
                        id='cityInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="address1Input">address 1</label>
                    <input 
                        defaultValue={ detailsData.address1 !== undefined ? detailsData.address1 : '' } 
                        ref={ address1InputRef } 
                        type="text" 
                        id='address1Input'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="address1Input">address 2</label>
                    <input 
                        defaultValue={ detailsData.address2 !== undefined ? detailsData.address2 : '' } 
                        ref={ address2InputRef } 
                        type="text" 
                        id='address2Input'/>
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
                    continue
                </button>
            </div>
        </form>
    );
};

export default ShippingInfoInputsComponent;
