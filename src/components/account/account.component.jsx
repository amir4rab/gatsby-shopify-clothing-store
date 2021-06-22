import React, { useEffect, useState } from 'react';

import { 
    getUserPromise,
    signOut,
} from '../../utilities/firebase/functions/functions';
import LoadingDisplayComponent from '../loadingDisplay/loadingDisplay.component';

import * as classes from './account.module.scss';
import LoginDisplayComponent from './loginDisplay/loginDisplay.component';
import LogoutDisplayComponent from './logoutDisplay/logoutDisplay.component';

const AccountComponent = () => {
    const [ userData, setUserData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        getUserPromise().then(res => {
            setUserData(res);
            setIsLoading(false);
        });
    }, []);

    // const userDataSeter = (data) => setUserData(data);

    const signoutFn = _ => signOut()
        .then(_ => setUserData(null));

    return (
        <div className={ classes.accountComponent }>
            <div className={ classes.title }>
                <h1>
                    Account
                </h1>
            </div>
            <div>
                {
                    isLoading ? 
                    <LoadingDisplayComponent maxWidth="10vw" />
                    :
                    <div>
                        {
                            userData === null ?
                            <LogoutDisplayComponent setUserData={ setUserData } />
                            :
                            <LoginDisplayComponent singOut={signoutFn}/>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default AccountComponent;
