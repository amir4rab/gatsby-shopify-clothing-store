import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby'

import SearchInput from '../../inputs/searchInput/searchInput.component';
import favoriteIcon from '../../../images/icons/favorite.svg';

import * as classes from './mobileHome.module.scss';

const MobileHome = () => {
    return (
        <div className={ classes.mobileHome }>
            <div className={ classes.header }>
                <SearchInput />
                <Link className={ classes.imageLink } to='/favorites'>
                    <img src={favoriteIcon} alt="favorate" />
                </Link>
            </div>
        </div>
    );
};

export default MobileHome;
