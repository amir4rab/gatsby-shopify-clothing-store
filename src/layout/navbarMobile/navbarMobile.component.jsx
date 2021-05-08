import React from 'react';
import { Link } from 'gatsby';

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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#EEEEEE"/>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/account" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Account
                    </div>
                    <div className="image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#EEEEEE"/>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/cart" className="navbarMobile_link" activeClassName="active">
                <div className="inner">
                    <div className="title">
                        Cart
                    </div>
                    <div className="image">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#EEEEEE"/>
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavbarMobile;