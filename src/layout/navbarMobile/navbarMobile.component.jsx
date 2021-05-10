import React from 'react';
import { Link } from 'gatsby';

import './navbarMobile.scss';

import homeIcon from './../../images/icons/home.svg';
import accountIcon from './../../images/icons/account.svg';
import shoppingCartIcon from './../../images/icons/shopping_cart.svg';

const NavbarMobile = () => {

    return (
        <div className="navbarMobile">
            <Link to="/" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Home
                    </div>
                    <div className="image">
                        <img alt="home" src={homeIcon} />
                    </div>
                </div>
            </Link>
            <Link to="/account" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Account
                    </div>
                    <div className="image">
                        <img alt="account" src={accountIcon} />
                    </div>
                </div>
            </Link>
            <Link to="/cart" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Cart
                    </div>
                    <div className="image">
                        <img alt="shopping cart" src={shoppingCartIcon} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavbarMobile;