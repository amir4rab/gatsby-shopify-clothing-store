import React, { useEffect, useRef , useState, useCallback } from 'react';
import { Link } from 'gatsby';

import * as classes from './favorites.module.scss';

import GobackButton from '../buttons/gobackButton/gobackButton.component';
import {
    getData,
    getUserPromise,
    getUser,
} from './../../utilities/firebase/functions/functions';
import ProductDisplayerComponent from '../productDisplayer/productDisplayer.component';
import LoadingDisplayComponent from '../loadingDisplay/loadingDisplay.component';


const filterItems = (baseArr, filters) => {
    const filterdArr = [];

    filters.forEach(item => {
        baseArr.forEach((element) => {
            if(element.shopifyId === item) filterdArr.push(element);
        });
    })

    return filterdArr;
}

const FavoritesComponent = ({ dataArr }) => {
    let isMounted = useRef(true);
    const [ filterdArr, setFilterdArr ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isLogedIn, setIsLogedIn ] = useState(false);

    const getT = useCallback(() => {
        getData('favorites').then(res => {
            if(!isMounted) return;

            setFilterdArr(filterItems(dataArr, Object.keys(res)));
            setIsLogedIn(true);
            setIsLoading(false);
        });
    },[dataArr]);

    useEffect(() => {
        if( getUser() !== null ) {
            getT();
        };

        
        getUserPromise().then( res => {
            if (res === null) {
                setIsLoading(false);
                return;
            };

            getT();
        });
        return () => { isMounted.current = false }
    }, [getT]);

    return (
        <div className={ classes.favorites }>
            <div className={ classes.title }>
                <GobackButton />
                <h1>
                    Favorites
                </h1>
            </div>
            <div className={ classes.content }>
                {
                    isLoading ? 
                    <LoadingDisplayComponent /> :
                    <div>
                        {
                            isLogedIn ? 
                            <ProductDisplayerComponent dataArr={ filterdArr } />
                            :
                            <div className={ classes.loginErr }>
                                <p>
                                    This part is only avilabe for users
                                </p>
                                <p>
                                    you can login <Link to="/account">here</Link>.
                                </p>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default FavoritesComponent;
