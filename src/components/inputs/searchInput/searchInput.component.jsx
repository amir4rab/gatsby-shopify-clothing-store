import React from 'react';
import { navigate } from 'gatsby';

import searchIcon from '../../../images/icons/search.svg';
import './searchInput.scss';

const SearchInput = ({ eventFn = null, expanded = false, defaultValue = null }) => {
    const inputEventHandler = (e) => {
        if(eventFn === null){
            if( e.code === 'Enter' ) navigate(`/search?n=${e.target.value}`)
        } else {
            eventFn(e.target.value);     
        }
    }

    return (
        <div className={[
                "searchInput",
                expanded === false ? '' : 'expanded'
            ].join(' ')}>
            { 
                defaultValue === null ?
                <input onKeyDown={ inputEventHandler } className="input" type="text"/>
                :
                <input value={defaultValue} onChange={ inputEventHandler } className="input" type="text"/>

            }
            <img className="icon" src={searchIcon} alt="search" />
        </div>
    );
};

export default SearchInput;
