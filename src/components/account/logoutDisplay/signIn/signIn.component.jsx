import React, { useRef, memo } from 'react';

import * as classes from './signIn.module.scss';

const SignInComponent = memo(({ submitFn, errors }) => {
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');

    const submitInnerFn = (e) => {
        e.preventDefault();
        submitFn(emailInputRef.current.value, passwordInputRef.current.value);
    }
    
    return (
        <form className={ classes.signIn }>
            <div className={ classes.inputGroup }>
                <label htmlFor="emailInput" >email</label>
                <input name="email" ref={ emailInputRef } id="emailInput"  type="email"/>
            </div>
            <div className={ classes.inputGroup }>
                <label htmlFor="passwordInput" >password</label>
                <input name="password" ref={ passwordInputRef } id="passwordInput"  type="password"/>
            </div>
            {
                errors !== null ?
                <div className={ classes.errors }>
                    { errors }
                </div> : null
            }
            <button
                type="submit"
                className={ classes.signinBtn }
                onClick={ (e) => submitInnerFn(e)}
            >
                Signin
            </button>
        </form>
    );
});

export default SignInComponent;
