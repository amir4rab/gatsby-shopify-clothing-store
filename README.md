![img of website on desktop](./assets/browserPreview.jpg)

<h1 align="center">
  <p>a Simple and Fast</p>
  <p>Ecommerce website</p>
</h1>

## ⚡ Live Demo 
- Avilable at [amir4rab-st.netlify.com](https://amir4rab-st.netlify.app/).

## 👾 About

#### Libraries:
- firebase
- gatsby
- react-redux
- shopify-buy

## 🚀 Cloning guide

1.  **Clone the code**

    Use git to clone the website code.

    ```shell
    git clone https://github.com/amir4rab/gatsby-shopify-clothing-store
    cd gatsby-shopify-clothing-store
    ```

2.  **Add environment variables**

    start a firebase application and setup a shopify account.
    '.env.development' file should incloude the following values:
    ```javascript
      SHOPIFY_SHOP_NAME= 'your value'
      SHOPIFY_ACCESS_TOKEN= 'your value'

      FIREBASE_API_KEY= 'your value'
      FIREBASE_AUTH_DOMAIN= 'your value'
      FIREBASE_PROJECT_ID= 'your value'
      FIREBASE_STORAGE_BUCKET= 'your value'
      FIREBASE_MESSAGING_SENDER_ID= 'your value'
      FIREBASE_APP_ID= 'your value'
      FIREBASE_DATABASE_URL= 'your value'
    ```
    also you need to replace '.env.production' with the following values:
    ```javascript
      SHOPIFY_SHOP_NAME= 'your value'
      SHOPIFY_ACCESS_TOKEN= 'your value'

      FIREBASE_API_KEY= 'your value'
      FIREBASE_AUTH_DOMAIN= 'your value'
      FIREBASE_PROJECT_ID= 'your value'
      FIREBASE_STORAGE_BUCKET= 'your value'
      FIREBASE_MESSAGING_SENDER_ID= 'your value'
      FIREBASE_APP_ID= 'your value'
      FIREBASE_DATABASE_URL= 'your value'
    ```

3.  **Installing the dependencies**
    then write the following command:
    ```shell
      npm install
    ```

4. **Start developing**
    Everything is almost ready, just type the following command:
    ```shell
      npm run develop
    ```
    Your site is now running at http://localhost:8000!