import React, { useRef, useState } from 'react';

import GoBackButton from '../../buttons/gobackButton/gobackButton.component';

import './../styles/inputStyles.scss'

const PersonalInfoInputsComponents = ({ setDetailsFn, changePageFn }) => {
    const [ errorState, setErrorState ] = useState('');

    const firstNameInputRef = useRef('');
    const lastNameInputRef = useRef('');
    const phoneInputRef = useRef('');

    const checkInputs = _ => {
        if ( firstNameInputRef.current.value === '' ) {
            setErrorState('pease enter your first name');
            return -1;
        }
        if ( lastNameInputRef.current.value === '' ) {
            setErrorState('pease enter your last name');
            return -1;
        }
        if ( phoneInputRef.current.value === '' ) {
            setErrorState('pease enter your phone number');
            return -1;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if ( checkInputs() === -1 ) return;

        setDetailsFn({
            firstName: firstNameInputRef.current.value,
            lastName: lastNameInputRef.current.value,
            phone: phoneInputRef.current.value,
        });
        changePageFn(pervValue => pervValue++);
    }

    return (
        <form className='inputForm'>
            <div className='heroSection'>
                <GoBackButton />
                <h1>
                    Personal info
                </h1>
            </div>
            <div className='inputSection'>
                <div className='inputGroup'>
                    <label htmlFor="firstNameInput">first name</label>
                    <input ref={ firstNameInputRef } type="text" id='firstNameInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="lastNameInput">last name</label>
                    <input ref={ lastNameInputRef } type="text" id='lastNameInput'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor="phoneInput">phone</label>
                    <input ref={ phoneInputRef } type="number" id='phoneInput'/>
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
                <button onClick={ e => submitHandler(e) } role="submit">
                    continue
                </button>
            </div>
        </form>
    );
};

export default PersonalInfoInputsComponents;
