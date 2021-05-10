import React, { useEffect, useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import { useQueryParam, StringParam } from "use-query-params";

import SearchComponent from '../components/search/search.component';

const SearchPage = ({data}) => {
    const [ itemName, setItemName ] = useQueryParam('n', StringParam);
    const filterData = useCallback((searchquery) => data.allShopifyProduct.nodes.filter(product => product.title.includes(searchquery)),[data.allShopifyProduct.nodes]);

    const [ filterdProducts, setFilterdProducts ] = useState({
        prevSearchQuery: itemName,
        data: filterData(itemName)
    });
    
    useEffect( _ => {
        if(filterdProducts.prevSearchQuery !== itemName) setFilterdProducts({
            prevSearchQuery: itemName,
            data: filterData(itemName)
        });
    },[filterData,itemName, filterdProducts.prevSearchQuery]);

    return (
        <SearchComponent productDataArr={filterdProducts.data} searchParams={itemName ? itemName : ''} setSearchParams={setItemName}/>
    );
};

export const query = graphql`
    query getProductsDataForSearchPage {
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

export default SearchPage;
