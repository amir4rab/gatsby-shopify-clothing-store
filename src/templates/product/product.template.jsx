//** functional imports **//
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { connect } from 'react-redux';

//** components imports **//
import BackButton from './../../components/buttons/gobackButton/gobackButton.component';
import AddToCartButton from '../../components/buttons/addToCartButton/addToCartButton.component';
import VariantSelectorComponent from './../../components/variantSelector/variantSelector.component';

//** dispatchs for redux **//
import { addItem as addItemToCartRedux } from '../../redux/shopingCart/shopingCart.actions';

//** styles imports **//
import * as classes from './product.module.scss';

//** function to check if item is already in cart **//
const checkIfAlreadyInCart = ( dataArr ,shopifyId ) => {
    let alreadyInCart = false;
    if(dataArr.length === 0) return alreadyInCart;

    dataArr.every( item => {
        if( item.data.shopifyId !== shopifyId ) return true;

        alreadyInCart = true;

        return false;
    });
    return alreadyInCart;
}

const ProductTemplate = ({ 
    data, 
    cartData, 
    addItemToCart 
}) => {
    
    const productData = data.shopifyProduct;
    const [ activeVarient, setActiveVarient ] = useState(productData.variants[0]);
    const [ alreadyInCart, setAlreadyInCart ] = useState(checkIfAlreadyInCart(cartData.dataArr, activeVarient.shopifyId));

    useEffect(() => {
        setAlreadyInCart(checkIfAlreadyInCart(cartData.dataArr, activeVarient.shopifyId));
    }, [activeVarient, cartData.dataArr])

    // console.log(activeVarient);
    // console.log(cartData);
    // console.log(alreadyInCart);

    const addToCart = () => {
        const itemObj = {
            shopifyId: activeVarient.shopifyId,
            varient: activeVarient.title,
            price: activeVarient.price,
            title: productData.title,
            img: productData.images
        }
        // console.log(itemObj);
        addItemToCart(itemObj);
    }

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
                    <div>
                        {
                            !alreadyInCart ?
                            <AddToCartButton onClick={addToCart} />
                            :
                            <p>already in Cart</p>
                        }
                    </div>
                    :
                    <p>`not avilable now :(`</p>
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

const mapStateToProps = state => ({
    cartData: state.shopingCart
});

const mapDispatchProps = dispatch => ({
    addItemToCart: data => dispatch(addItemToCartRedux(data))
})

export default connect( mapStateToProps, mapDispatchProps )(ProductTemplate);
