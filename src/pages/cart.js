import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  useCart,
  useCartItems,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckoutUrl,
} from "gatsby-theme-shopify-manager"

export default function Cart() {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)

  const lineItems = useCartItems()
  const cart = useCart()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckoutUrl()
  const addItemToCart = useAddItemToCart()

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid
    }
    return null
  }

  const LineItem = ({ item }) => (
    <div className="grid grid-cols-6 items-center border-b border-black py-4" style={{justifyItems: "center"}}>
      <div className="flex col-span-4" style={{justifySelf: "start"}}>
        <Img fluid={getImageFluidForVariant(item.variant.id)} className="p-1 border border-gray-300 h-24 w-24 mr-4"/>
        <div>
          <Link
            to={`/product/${getHandleForVariant(item.variant.id)}`}
            className="underline font-heading"
          >
            {item.title}
          </Link>
          <ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: "none" }}>
            {item.variant.selectedOptions.map(({ name, value }) => (
              <li key={name} className="font-heading text-xs mb-1">
                {name}: {value}
              </li>
            ))}
            <li key="quantity" className="font-heading text-xs mb-0 self-center">
              Quantity: {item.quantity}
            </li>
          </ul>
        </div>
      </div>
      <button 
        variant="link"
        className="font-heading text-xs uppercase px-1 border border-black self-center rounded inline-block hover:opacity-50"
        onClick={() => removeFromCart(item.variant.id)}
      >
        Remove
      </button>
      <span>
        ${Number(item.variant.priceV2.amount).toFixed(2)}
      </span>
    </div>
  )

  const emptyCart = (
    <Layout>
      <SEO title="Cart" />
      <div className="min-h-screen">
        <h1 className="text-center mx-auto my-32 text-3xl">Cart</h1>
        <p className="text-center">Your shopping cart is empty.</p>
      </div>
    </Layout>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <Layout>
      <SEO title="Cart" />
      <h1 className="text-center mx-auto my-32 text-3xl">Cart</h1>
      <div className="min-h-screen">
        <div className="max-w-screen-lg mx-auto mb-12">
          {lineItems.map(item => (
            <React.Fragment key={item.id}>
              <LineItem key={item.id} item={item} />
            </React.Fragment>
          ))}
        </div>
        <h3 className="max-w-screen-lg mx-auto font-heading uppercase mb-4">Cart Summary</h3>
        <div className="flex max-w-screen-lg mx-auto items-center justify-between w-full">
          <div className="grid grid-cols-2 gap-4">
            <span>Subtotal:</span>
            <span sx={{ marginLeft: "auto" }}>${cart.totalPrice}</span>
            <span>Shipping:</span>
            <span sx={{ marginLeft: "auto" }}> - </span>
            <span variant="bold">Estimated Total:</span>
            <span variant="bold" sx={{ marginLeft: "auto" }}>
              ${cart.totalPrice}
            </span>
          </div>
          <a className="font-heading text-white bg-black px-4 py-2 rounded hover:opacity-50" href={checkout} target="_blank" rel="noopener noreferrer">
            Complete My Order
          </a>
        </div>
      </div>
    </Layout>
  )
}