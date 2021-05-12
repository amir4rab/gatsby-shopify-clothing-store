import React, { useCallback } from 'react';
import SearchInput from '../inputs/searchInput/searchInput.component';
import GoBackButton from '../buttons/gobackButton/gobackButton.component';
import ProductDisplayerComponent from '../productDisplayer/productDisplayer.component';

import * as classes from './search.module.scss';

const SearchComponent = ({ isSearchLoading ,searchParams, setSearchParams, productDataArr }) => {
    // const [ waitingState, setWaitingState ] = useState(true);
    // const [ loaclSearchState, setLoaclSearchState ] = useState(searchParams);

    // useEffect(() =>{
    // },[ setSearchParams]);
    
    const setSP = useCallback((value) => {
        // setInputValueState(value)
        setSearchParams(value, 'replace');
    },[setSearchParams]);

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
                {                 
                    ( productDataArr.length === 0 || searchParams.length === 0 ) && !isSearchLoading ?
                    <div>
                        Please search for somthing!
                    </div>
                    :
                    <div>
                        {
                            !isSearchLoading ?
                            <ProductDisplayerComponent dataArr={productDataArr} />
                            :
                            <div className={ classes.loadingAnimation }>
                                Loading...
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchComponent;
