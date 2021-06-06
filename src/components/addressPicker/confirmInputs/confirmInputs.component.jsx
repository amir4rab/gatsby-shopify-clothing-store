import React from 'react';

import arrowBack from './../../../images/icons/arrow_back.svg';
import './../styles/inputStyles.scss';

const ConfirmInputsComponent = ({ detailsData, thisPageIndex ,changePageFn }) => {

    const goBackFn = () => {
        changePageFn( thisPageIndex - 1 );
    }
    const submitHandler = (e) => {
        e.preventDefault();
        changePageFn( thisPageIndex + 1 );
    }

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
            <div className='inputsValues'>
                <div className='valueTitle'>
                    <h3>Personal info</h3>
                </div>
                <div className='valueGroups'>
                    <p>
                        First name: { detailsData.firstName }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        Last name: { detailsData.lastName }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        Phone: { detailsData.phone }
                    </p>
                </div>
            </div>
            <div className='inputsValues'>
                <div className='valueTitle'>
                    <h3>Shipping info</h3>
                </div>
                <div className='valueGroups'>
                    <p>
                        Country: { detailsData.country }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        Province: { detailsData.province }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        Zip: { detailsData.zip }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        City: { detailsData.city }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        Address 1: { detailsData.address1 }
                    </p>
                </div>
                <div className='valueGroups'>
                    <p>
                        Address 2: { detailsData.address2 }
                    </p>
                </div>
            </div>
            <div className='submitSection'>
                <button onClick={ e => submitHandler(e) }>
                    Confirm all
                </button>
            </div>
        </div>
    );
};

export default ConfirmInputsComponent;
