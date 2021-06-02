import React, { useEffect } from 'react';

import {
    getData,
    getUserPromise,
    getUser,
    setData,
    removeData,
} from './../../utilities/firebase/functions/functions';

const FavoritesComponent = ({ dataArr }) => {

    useEffect(() => {
        if( getUser() !== null ) return;
        console.log('not retuned!');
        getUserPromise().then(res => {
            console.log(false);
        });
    }, []);

    const setT = () => {
        setData('test1', 'asdfghjk').then(res => console.log(res));
    }
    const getT = () => {
        getData('test1').then(res => console.log(res));
    }
    const removeT = () => {
        removeData('test1').then(res => console.log(res));
    }

    // const getdata = () => {
    //     getData().then(res => console.log(res));
    // }
    // getdata();

    // console.log(dataArr);

    return (
        <div>
            <button 
                style={{ color:'black' }}
                onClick={ setT }>
                setT
            </button>
            <button 
                style={{ color:'black' }}
                onClick={ getT }>
                getT
            </button>
            <button 
                style={{ color:'black' }}
                onClick={ removeT }>
                removeT
            </button>
        </div>
    );
};

export default FavoritesComponent;
