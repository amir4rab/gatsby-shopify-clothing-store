import React, { useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from "gatsby";

import PersonalInfoInputsComponent from './personalInfoInputs/personalInfoInputs.component';
import ShippingInfoInputsComponent from './shippingInfoInputs/shippingInfoInputs.component';
import ConfirmInputsComponent from './confirmInputs/confirmInputs.component';
import AddEmailComponent from './addEmail/addEmail.component';

import * as classes from './addressPicker.module.scss';

const AddressPickerComponent = ({ cartData }) => {
    if(cartData.dataArr.length === 0) navigate('/cart');

    const [ inputsActiveSection, setInputsActiveSection ] = useState(0);
    const [ details, setDetails ] = useState({});

    const setDetailsFn = (newValues, page) => {
        setDetails( pervValues => ({
            ...newValues,
            ...pervValues
        }))
        setInputsActiveSection(page);
    }

    // console.log(cartData.dataArr);

    return (
        <div className={ classes.addressPicker }>
            <div>
                <div>
                    <p>Part {inputsActiveSection + 1}</p>
                </div>
                {
                    inputsActiveSection === 0 ? 
                    <PersonalInfoInputsComponent 
                        setDetailsFn={ setDetailsFn } 
                        thisPageIndex={ inputsActiveSection }
                        detailsData={ details } /> : null
                }
                {
                    inputsActiveSection === 1 ? 
                    <ShippingInfoInputsComponent 
                        setDetailsFn={ setDetailsFn } 
                        thisPageIndex={ inputsActiveSection } 
                        changePageFn={ setInputsActiveSection }
                        detailsData={ details } /> : null
                }
                {
                    inputsActiveSection === 2 ? 
                    <ConfirmInputsComponent 
                        changePageFn={ setInputsActiveSection }
                        thisPageIndex={ inputsActiveSection } 
                        detailsData={ details }/> : null
                }
                {
                    inputsActiveSection === 3 ? 
                    <AddEmailComponent 
                        changePageFn={ setInputsActiveSection }
                        thisPageIndex={ inputsActiveSection } 
                        detailsData={ details }
                        productsDataArr={ cartData.dataArr }/> : null
                }
            </div>
        </div>
    );
};

const mapStatesToProps = state => ({
    cartData: state.shopingCart
});


export default  connect( mapStatesToProps, null )(AddressPickerComponent);
