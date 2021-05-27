import React from 'react';
import { Link } from 'gatsby';

import securityIcon from '../../../images/icons/security.svg';
import aboutIcon from '../../../images/icons/about.svg';
import favoritesIcon from '../../../images/icons/favorite.svg';
import * as classes from './loginDisplay.module.scss';

function LoginDisplayComponent({ singOut }) {
    return (
        <div className={ classes.loginDisplay }>
            <div className={ classes.item }>
                <Link to="/account/security">
                    <img src={securityIcon} alt="securityIcon" />
                    <p>
                        Security
                    </p>
                </Link>
            </div>
            <div className={ classes.item }>
                <Link to="/favorites">
                    <img src={favoritesIcon} alt="favoritesIcon" />
                    <p>
                        Favorites
                    </p>
                </Link>
            </div>
            <div className={ classes.item }>
                <Link to="/about">
                    <img src={aboutIcon} alt="aboutIcon" />
                    <p>
                        About
                    </p>
                </Link>
            </div>
            <div className={ classes.dangerZone }>
                <h3 className={ classes.title }>
                    Danger zone
                </h3>
                <button 
                    onClick={ singOut }
                    className={ classes.dangerBtn }>
                    signout
                </button>
            </div>
        </div>
    );
};

export default LoginDisplayComponent;
