import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import BackButton from './../../components/buttons/gobackButton/gobackButton.component';
import AddToCartButton from '../../components/buttons/addToCartButton/addToCartButton.component';
import VariantSelectorComponent from './../../components/variantSelector/variantSelector.component';

import * as classes from './product.module.scss';

const ProductTemplate = ({ data }) => {
    const productData = data.shopifyProduct;
    const [ activeVarient, setActiveVarient ] = useState(productData.variants[0]);

    console.log(activeVarient);

    return (
        <div className={classes.productTemplate }>
            <div className={ classes.image }> 
                <GatsbyImage alt={ productData.title } image={ productData.images[0].localFile.childImageSharp.gatsbyImageData }/>
                <div className={ classes.backButton }>
                    <BackButton />
                </div>
            </div>
            <div className={ classes.header }>
                <h1 className={ classes.title }>
                    { productData.title }
                </h1>
                <h3 className={ classes.price }>
                    { activeVarient.price }€
                </h3>
            </div>
            <div className={ classes.variantSelectorComp }>
                <VariantSelectorComponent varientsArr={productData.variants}  setActiveVarient={setActiveVarient} activeVarient={activeVarient} />
            </div>
            <div className={ classes.btnSection }>
                {
                    activeVarient.availableForSale ?
                    <AddToCartButton />
                    :
                    <p>not avilable now :(</p>
                }
            </div>
        </div>
    );
};

export const query = graphql`
    query getProductDetailsForProductTemplate($shopifyId: String) {
        shopifyProduct(
            shopifyId: {eq: $shopifyId}
        ) {
            title
            shopifyId
            availableForSale
            variants {
                availableForSale
                title
                shopifyId
                price
            }
            images {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            priceRange {
                minVariantPrice {
                    amount
                }
            }
        }
    }
`;

export default ProductTemplate;
