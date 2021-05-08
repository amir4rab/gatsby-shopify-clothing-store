import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import './navbarDesktop.scss';

const NavbarDesktop = () => {
    return (
        <div className="navbarDesktop">
            <Link to="/" className="link" activeClassName="active">
                <StaticImage alt="home" className="innerImg" placeholder="tracedSVG" src="./../../images/icons/pink/home.svg"/>
            </Link>
            <Link to="/account" className="link" activeClassName="active">
                <StaticImage alt="account" className="innerImg" placeholder="tracedSVG" src="./../../images/icons/pink/account.svg"/>
            </Link>
            <Link to="/cart" className="link" activeClassName="active">
                <StaticImage alt="cart" className="innerImg" placeholder="tracedSVG" src="./../../images/icons/pink/shopping_cart.svg"/>
            </Link>
        </div>
    );
};

export default NavbarDesktop;
