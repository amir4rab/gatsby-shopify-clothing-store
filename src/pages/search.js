import React, { useEffect, useState, useRef } from 'react';
import { graphql } from 'gatsby';
import { useQueryParam, StringParam } from "use-query-params";

import SearchComponent from '../components/search/search.component';

const reformatText = (input = null) => {
    if(input === null) return null;
    return input.toLowerCase().replace(/ /g, '-');
};
const filterData = (searchquery, data) => data.allShopifyProduct.nodes.filter(product => reformatText(product.title).includes(reformatText(searchquery)));
const aycnFilterData = (searchquery, data) => (new Promise((resolve) => {
    resolve(filterData(searchquery, data));
}));

const SearchPage = ({data}) => {
    const [ itemName, setItemName ] = useQueryParam('n', StringParam);
    const [ searchLoading, setSearchLoading ] = useState(false);

    const [ filterdProducts, setFilterdProducts ] = useState({
        prevSearchQuery: itemName,
        data: filterData( itemName, data )
    });

    const refTofilterData = useRef((itemName) => (aycnFilterData(itemName,data)),[]);
    
    useEffect( _ => {
        setSearchLoading(true);
        if(filterdProducts.prevSearchQuery !== itemName) {
            console.log('into if')
            const setTimeoutFn = setTimeout( _ => {
                refTofilterData.current(itemName).then(res => {    
                    console.log(`aycnFilterData called!`);
                    setFilterdProducts({
                        prevSearchQuery: itemName,
                        data: res
                    });
                    setSearchLoading(false);
                });
            }, 500);
            return _ => {
                setSearchLoading(false);
                clearTimeout(setTimeoutFn);
            };
        }
        setSearchLoading(false);
        return _ => {
            setSearchLoading(false);
        }
    },[itemName, filterdProducts.prevSearchQuery, setSearchLoading]);

    const setSearchParamsFn = (inputValueState) => (new Promise((resolve) => {
        setSearchLoading(true);
        setItemName(inputValueState, 'replace');
        resolve();
    }))

    return (
        <SearchComponent isSearchLoading={searchLoading} productDataArr={filterdProducts.data} searchParams={itemName ? itemName : ''} setSearchParams={setSearchParamsFn}/>
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
