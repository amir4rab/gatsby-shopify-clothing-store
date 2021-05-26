import React, { useRef } from 'react';

import * as classes from './signUp.module.scss';

const SignUpComponent = ({ submitFn, errors }) => {
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const rePasswordInputRef = useRef('');

    const submitInnerFn = (e) => {
        e.preventDefault();
        submitFn(emailInputRef.current.value, passwordInputRef.current.value, rePasswordInputRef.current.value);
    }

    return (
        <form className={ classes.signUp }>
            <div className={ classes.inputGroup }>
                <label htmlFor="emailInput">email</label>
                <input ref={ emailInputRef } id="emailInput" type="email" />
            </div>
            <div className={ classes.inputGroup }>
                <label htmlFor="passwordInput" >password</label>
                <input ref={ passwordInputRef } id="passwordInput" type="password" />
            </div>
            <div className={ classes.inputGroup }>
                <label htmlFor="passwordRepeatInput" >repeat password</label>
                <input ref={ rePasswordInputRef } id="passwordRepeatInput" type="password" />
            </div>
            {
                errors !== null ?
                <div className={ classes.errors }>
                    { errors }
                </div> : null
            }
            <button
                type="submit"
                className={ classes.submitBtn }
                onClick={ submitInnerFn }
            >
                Signup
            </button>
        </form>
    );
};

export default SignUpComponent;
