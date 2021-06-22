import Client from 'shopify-buy';

export const paymentFn = (productsArr, shippingAddress, email) => ( new Promise( async (resolve, reject) => {

    try {
        const client = Client.buildClient({
            storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
            domain: `${process.env.SHOPIFY_SHOP_NAME}.myshopify.com`,
        });
    
        const createCheckout = client.checkout;
    
        let checkout = null;
        await createCheckout.create()
            .then( res => {
                checkout = res;
            });
    
        // console.log(checkout.id);
        
        const lineItemsToAdd = productsArr.map(item => ({
            variantId: item.data.shopifyId,
            quantity: item.ammount,
        }));
    
        await client.checkout.addLineItems(
            checkout.id,
            lineItemsToAdd
        );
    
        await client.checkout.updateShippingAddress( checkout.id, shippingAddress); 
    
        await client.checkout.updateEmail( checkout.id, email);
    
        //!     trynig to open this page in background to no success     !//
        // const loactionObj = document.location;
        // window.open(`https://${loactionObj.host}/checkout/success`);
        // window.focus()

        window.location.assign(checkout.webUrl)
    
        resolve('succsess');
    }
    catch {
        reject('error occurred')
    }
}))