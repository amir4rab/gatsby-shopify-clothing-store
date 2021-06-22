import React, { useState } from 'react';

import SignInComponent from './signIn/signIn.component';
import SignUpComponent from './signUp/signUp.component';
import { 
    signIn,
    pSignIn,
    signUp,
    pSignUp,
    pSignInWithGoogle
} from '../../../utilities/firebase/functions/functions';

import * as classes from './logoutDisplay.module.scss';
import LoadingDisplayComponent from '../../loadingDisplay/loadingDisplay.component';


const LogoutDisplayComponent = ({ setUserData }) => {
    const [ isNewUser, setIsNewUser ] = useState(true);
    const [ isPersistent ] = useState(true);
    const [ isLoading, setIsLoading ] = useState(false);
    
    const [ signinErros, setSigninErrors ] = useState(null);
    const submitSingin = ( email, password ) => {
        setIsLoading(true);
        setSigninErrors(null);

        if(isPersistent){
            pSignIn(email, password)
                .then(res => {
                    setIsLoading(false);
                    setUserData(res);
                })
                .catch(err => {
                    setSigninErrors(err.message);
                    setIsLoading(false);
                })
        } else {
            signIn(email, password)
                .then(res => {
                    setIsLoading(false);
                    setUserData(res);
                })
                .catch(err => {
                    setSigninErrors(err.message);
                    setIsLoading(false);
                })
        }
    }

    const [ signupErros, setSignupErrors ] = useState(null);
    const submitSingup = ( email, password, rePassword ) => {
        setIsLoading(true);
        setSignupErrors(null);

        if ( password !== rePassword ) {
            setSignupErrors('Password repeat is wrong!');
            setIsLoading(false);
            return;
        }

        if(isPersistent){
            pSignUp(email, password)
                .then(res => {
                    setIsLoading(false);
                    setUserData(res);
                })
                .catch(err => {
                    setSignupErrors(err.message);
                    setIsLoading(false);
                })
        } else {
            signUp(email, password)
                .then(res => {
                    setIsLoading(false);
                    setUserData(res);
                })
                .catch(err => {
                    setSignupErrors(err.message);
                    setIsLoading(false);
                })
        }
    }
    
    const signInWithGoogleFn = _ => {
        setIsLoading(true);
        setSignupErrors(null);

        pSignInWithGoogle()
            .then(res => {
                setIsLoading(false);
                setUserData(res);
            })
            .catch(err => {
                setSignupErrors(err.message);
                setIsLoading(false);
            });
    };
    
    return (
        <div className={ classes.logoutDisplay }>
            {
                isLoading ?
                <LoadingDisplayComponent maxWidth={'10vw'} /> :
                <div>
                    <h2 className={ classes.title }>
                        Signin
                    </h2>
                    <div className={ classes.inner }>                        
                        <div className={ classes.signinOptions }>
                            <h3 className={ classes.title }>
                                signin with
                            </h3>
                            <button className={ classes.signInWithGoogle } onClick={ signInWithGoogleFn }>
                                signin with Google
                            </button>
                        </div>
                        <div className={ classes.divider }>
                            or
                        </div>
                        <div className={ classes.inputMethods }>
                            <div
                                className={ classes.toggler }>
                                <button
                                    onClick={ _ => setIsNewUser(!isNewUser) }>
                                    {
                                        `switch to ${isNewUser ? 'Signup' : 'Signin'}`
                                    }
                                </button>
                            </div>
                            <div
                                className={ classes.methodCompWrapper }
                            >
                                {
                                    isNewUser ? 
                                    <SignInComponent submitFn={ submitSingin } errors={ signinErros } /> 
                                    : 
                                    <SignUpComponent submitFn={ submitSingup } errors={ signupErros } />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default LogoutDisplayComponent;
