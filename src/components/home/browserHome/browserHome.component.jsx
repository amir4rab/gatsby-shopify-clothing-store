import React, { useCallback, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import * as classes from './browserHome.module.scss';
import likeIcon from './../../../images/icons/favorite.svg';

import BrowserHomeFiltersComponent from './browserHomeFilters/browserHomeFilters.component';
import ProductDisplayerComponent from '../../productDisplayer/productDisplayer.component';
import SearchInput from '../../inputs/searchInput/searchInput.component';

const findActiveCollection = (collectionsArray, activeCollection) => {
    const collection = collectionsArray.find(elment => elment.shopifyId === activeCollection);
    
    return collection.products
}

const BrowserHome = () => {
    const query = useStaticQuery(graphql`
        query browserHomeQuery {
            allShopifyCollection {
                nodes {
                    title
                    shopifyId
                    products {
                        priceRange {
                            minVariantPrice {
                                amount
                            }
                        }
                        title
                        shopifyId
                        images {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    image {
                        localFile {
                            childrenImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const [ activeCollection, setActiveCollection ] = useState(query.allShopifyCollection.nodes[0].shopifyId);

    const setToActiveCollection = useCallback((shopifyId) => {
        setActiveCollection(shopifyId)
    },[]);

    return (
        <div className={ classes.browserHome }>
            <div className={ classes.inputsBar }>
                <BrowserHomeFiltersComponent dataArray={query.allShopifyCollection.nodes} activeCollection={activeCollection} fn={setToActiveCollection} />
                <div className={ classes.buttons }>
                    <SearchInput />
                    <Link to='/favorites'>
                        <button className={ classes.favoratesButton }>
                            <img src={likeIcon} alt="link" />
                        </button>
                    </Link>
                </div>
            </div>
            <ProductDisplayerComponent dataArr={findActiveCollection( query.allShopifyCollection.nodes, activeCollection )} />
        </div>
    );
};


export default BrowserHome;
