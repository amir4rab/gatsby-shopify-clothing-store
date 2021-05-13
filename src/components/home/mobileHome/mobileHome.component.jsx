import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import SearchInput from '../../inputs/searchInput/searchInput.component';
import favoriteIcon from '../../../images/icons/favorite.svg';
import CardSliderComponent from '../../cardSlider/cardSlider.component';

import * as classes from './mobileHome.module.scss';


const MobileHome = () => {
    const query = useStaticQuery(graphql`
        query getColletionsForMobileHomeComponent {
            allShopifyCollection {
                nodes {
                    title
                    image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);

    console.log(query);

    return (
        <div className={ classes.mobileHome }>
            <div className={ classes.header }>
                <SearchInput />
                <Link className={ classes.imageLink } to='/favorites'>
                    <img src={favoriteIcon} alt="favorate" />
                </Link>
            </div>
            <div>
                <CardSliderComponent dataArr={query.allShopifyCollection.nodes} />
            </div>
        </div>
    );
};

export default MobileHome;
