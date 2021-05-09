import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import './navbarMobile.scss';

const NavbarMobile = () => {
    return (
        <div className="navbarMobile">
            <Link to="/" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Home
                    </div>
                    <div className="image">
                        <StaticImage alt="home" placeholder="tracedSVG" src="./../../images/icons/home.svg" />
                    </div>
                </div>
            </Link>
            <Link to="/account" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Account
                    </div>
                    <div className="image">
                        <StaticImage alt="account" placeholder="tracedSVG" src="./../../images/icons/account.svg" />
                    </div>
                </div>
            </Link>
            <Link to="/cart" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Cart
                    </div>
                    <div className="image">
                        <StaticImage alt="cart" placeholder="tracedSVG" src="./../../images/icons/shopping_cart.svg" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavbarMobile;