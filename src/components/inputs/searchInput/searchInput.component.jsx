import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './searchInput.scss';

function SearchInput() {
    return (
        <div className="searchInput">
            <input className="input" type="text"/>
            <StaticImage placeholder="tracedSVG"  className="icon" src="../../../images/icons/search.svg" alt="search" />
        </div>
    );
};

export default SearchInput;
