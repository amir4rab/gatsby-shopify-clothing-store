import React, { useCallback } from 'react';
import SearchInput from '../inputs/searchInput/searchInput.component';
import GoBackButton from '../buttons/gobackButton/gobackButton.component';
import ProductDisplayerComponent from '../productDisplayer/productDisplayer.component';

import * as classes from './search.module.scss';

const SearchComponent = ({ searchParams, setSearchParams, productDataArr }) => {
    console.log(productDataArr);

    const setSP = useCallback((value) => setSearchParams(value, 'replace'),[setSearchParams])

    return (
        <div className={ classes.searchComponent }>
            <div className={ classes.title }>
                <GoBackButton />
                <h1 className={ classes.h1 }>
                    Search
                </h1>
            </div>
            <div className={ classes.searchInput }>
                <SearchInput defaultValue={ searchParams } eventFn={ setSP } expanded={true} />
            </div>
            <div className={ classes.products }>
                <ProductDisplayerComponent dataArr={productDataArr} />
            </div>
        </div>
    );
};

export default SearchComponent;