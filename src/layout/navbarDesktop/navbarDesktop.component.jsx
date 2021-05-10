import React from 'react';
import { Link } from 'gatsby';

import homeIcon from './../../images/icons/home.svg';
import accountIcon from './../../images/icons/account.svg';
import shoppingCartIcon from './../../images/icons/shopping_cart.svg';

import homePinkIcon from './../../images/icons/pink/home.svg';
import accountPinkIcon from './../../images/icons/pink/account.svg';
import shoppingCartPinkIcon from './../../images/icons/pink/shopping_cart.svg';

import './navbarDesktop.scss';

const NavbarDesktop = () => {
    return (
        <div className="navbarDesktop">
            <Link to="/" className="link" activeClassName="active">
                <img alt="home-active-link" className="innerImg_active" src={homePinkIcon} />
                <img alt="home" className="innerImg" src={homeIcon} />
            </Link>
            <Link to="/account" className="link" activeClassName="active">
                <img alt="account-active-link" className="innerImg_active" src={accountPinkIcon} />
                <img alt="account" className="innerImg" src={accountIcon} />
            </Link>
            <Link to="/cart" className="link" activeClassName="active">
                <img alt="cart-active-link" className="innerImg_active" src={shoppingCartPinkIcon} />
                <img alt="shopping cart" className="innerImg" src={shoppingCartIcon} />
            </Link>
        </div>
    );
};

export default NavbarDesktop;
