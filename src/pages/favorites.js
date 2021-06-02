import React from 'react';
import { graphql } from 'gatsby';

import FavoritesComponent from '../components/favorites/favorites.component';

const FavoritesPage = ({ data }) => {
    return <FavoritesComponent dataArr={ data.allShopifyProduct.nodes } />;
};

export const query = graphql`
    query getProductsDataForFavoritesPage {
        allShopifyProduct {
            nodes {
                title
                images {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                            }
                    }
                }
                shopifyId
                priceRange {
                    minVariantPrice {
                        amount
                    }
                }
            }
        }
    }
`;

export default FavoritesPage;
