import React from 'react';
import { Link } from 'gatsby';

import SearchInput from '../../inputs/searchInput/searchInput.component';

import favoriteIcon from '../../../images/icons/favorite.svg'

import * as classes from './mobileShortcutBar.module.scss';

const MobileShortcutBarComponent = () => {
    return (
        <div className={ classes.mobileShortcutBarComponent }>
            <SearchInput />
            <Link className={ classes.imageLink } to='/favorites'>
                <img src={favoriteIcon} alt="favorate" />
            </Link>
        </div>
    );
};

export default MobileShortcutBarComponent;
