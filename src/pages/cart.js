import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  useCartItems,
  useCartTotals,
  useAddItemToCart,
  useRemoveItemFromCart,
  useCheckout,
} from "../context/StoreContext"

const CartPage = () => {
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
  const { tax, total } = useCartTotals()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckout()
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
    <div
      sx={{
        display: "grid",
        gridGap: "15px",
        gridTemplateColumns: "120px 2fr 80px 80px",
        alignItems: "center",
      }}
    >
      <div>
        <div sx={{ padding: 1, border: "1px solid gray" }}>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div>
        <Link
          url={`/product/${getHandleForVariant(item.variant.id)}`}
          sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
        >
          {item.title}
        </Link>
        <ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: "none" }}>
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <strong>{name}: </strong>
              {value}
            </li>
          ))}
          <li key="quantity">
            <strong>Quantity: </strong>
            {item.quantity}
          </li>
        </ul>
      </div>
      <button variant="link" onClick={() => removeFromCart(item.id)}>
        Delete
      </button>
      <span
        sx={{
          fontSize: 4,
          fontWeight: 700,
          marginLeft: "auto",
        }}
      >
        ${Number(item.variant.priceV2.amount).toFixed(2)}
      </span>
    </div>
  )

  const emptyCart = (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      <p>Your shopping cart is empty.</p>
      <button
        sx={{ mt: 4 }}
        onClick={() =>
          addItemToCart(
            variants[Math.floor(Math.random() * (variants.length - 1))]
              .shopifyId,
            1
          )
        }
      >
        <span role="img" aria-label="Dice Emoji">
          🎲
        </span>{" "}
        Random item plz
      </button>
    </Layout>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      {lineItems.map(item => (
        <React.Fragment key={item.id}>
          <LineItem key={item.id} item={item} />
          <hr sx={{ my: 3 }} />
        </React.Fragment>
      ))}
      <div sx={{ display: "flex" }}>
        <div sx={{ marginLeft: "auto", minWidth: "10rem", p: 4 }}>
          <h3 sx={{ mt: 0, mb: 3 }}>Cart Summary</h3>
          <hr />

          <div gap={1} columns={2} sx={{ my: 3 }}>
            <span>Subtotal:</span>
            <span sx={{ marginLeft: "auto" }}>{total}</span>
            <span>Shipping:</span>
            <span sx={{ marginLeft: "auto" }}> - </span>
            <span>Tax: </span>
            <span sx={{ marginLeft: "auto" }}>{tax}</span>
          </div>

          <hr />
          <div gap={1} columns={2}>
            <span variant="bold">Estimated Total:</span>
            <span variant="bold" sx={{ marginLeft: "auto" }}>
              {total}
            </span>
          </div>
          <button sx={{ mt: 4, width: "100%" }} onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage