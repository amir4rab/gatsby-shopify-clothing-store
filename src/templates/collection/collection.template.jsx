import React from 'react';
import { graphql } from 'gatsby';

import * as classes from './collection.module.scss';

import BackButton from '../../components/buttons/gobackButton/gobackButton.component';
import ProductDisplayerComponent from '../../components/productDisplayer/productDisplayer.component';


function CollectionTemplate({ data }) {
    return (
        <div className={ classes.collectionTemplate }>
            <div className={ classes.header }>
                <BackButton />
                <h1 className={ classes.title }>
                    { data.shopifyCollection.title }
                </h1>
            </div>
            <div className={ classes.productArea }>
                <ProductDisplayerComponent dataArr={ data.shopifyCollection.products } />
            </div>
        </div>
    )
};

export const query = graphql`
        query getCollectionForCollectionTemplate($id: String) {
            shopifyCollection(
                id: {eq: $id}
            ) {
                title
                products {
                    shopifyId
                    title
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `;

export default CollectionTemplate;
