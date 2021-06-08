import * as React from "react"
import HomeComponent from "../components/home/home.component"

console.log(`storefrontAccessToken: ${process.env.SHOPIFY_ACCESS_TOKEN}`,
  `domain: ${process.env.SHOPIFY_SHOP_NAME}.myshopify.com`,)

const IndexPage = () => {
  return (
      <div>
        <HomeComponent />
      </div>
  )
}

export default IndexPage
