import React, { useState, useEffect, useRef } from 'react';

import emptyLikeIcon from './../../../images/icons/favorite.svg'
import fullLikeIcon from './../../../images/icons/pink/favorite.svg'

import {
    getSpecificData,
    setData,
    removeData,
    getUserPromise,
    getUser
} from '../../../utilities/firebase/functions/functions';

import * as classes from './likeButton.module.scss';

const LikeButtonComponent = ({ data }) => {
    const shopifyId = data.shopifyId;
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isLogedin, setIsLogedin ] = useState(false);
    const [ isLiked, setIsLiked ] = useState(false);
    let isMounted = useRef(true);

    useEffect(_ => {
        if(getUser() !== null){
            getSpecificData(shopifyId, 'favorites')
                .then( res => {

                    if(!isMounted.current) return;

                    if( res !== null ) {
                        setIsLiked(true);
                    }
                    setIsLoading(false);
                    setIsLogedin(true);
                });
            return;
        }
        getUserPromise().then( res => {
            if(res !== null){
                getSpecificData(shopifyId, 'favorites')
                    .then( res => {
                        if(!isMounted.current) return;

                        if( res !== null ) {
                            setIsLiked(true);
                        }
                        setIsLoading(false);
                        setIsLogedin(true);
                    });
            } else {
                setIsLoading(false);
            }
        });
        return () => { isMounted.current = false };
    },[shopifyId]);

    const clickFn = _ => {
        if(!isLiked){
            setIsLoading(true);
            setData({ name: data.title }, shopifyId, 'favorites').then( res => {
                if(!isMounted.current) return;

                setIsLiked(true);
                setIsLoading(false);
            });
        } else {
            setIsLoading(true);
            removeData( shopifyId, 'favorites').then( res => {
                if(!isMounted.current) return;

                setIsLiked(false);
                setIsLoading(false);
            });
        }
    }

    return (
        <div className={ classes.likeButton }>
            {
                isLoading ?
                <div className={ classes.loading } /> :
                <button 
                    disabled={ !isLogedin }
                    onClick={ clickFn }
                    className={ classes.button }>
                    {
                        !isLiked ? 
                        <img src={ emptyLikeIcon } alt="not liked" />
                        :
                        <img src={ fullLikeIcon } alt="liked" />
                    }
                </button>
            }
        </div>
    );
};

export default LikeButtonComponent;
