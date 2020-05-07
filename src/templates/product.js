import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useState, useEffect, useMemo } from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart } from "../context/StoreContext"
import OptionPicker from "./components/optionPicker"

const DescWrapper = styled.div`
  p {
    ${tw`mb-4 text-sm max-w-sm`}
  }
`

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  const types = product.options.find(
    option => option.name.toLowerCase() === "type"
  ).values
  const sizes = product.options.find(
    option => option.name.toLowerCase() === "size"
  ).values

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])
  const images = useMemo(() => prepareVariantsImages(variants, "size"), [
    variants,
  ])

  if (images.length < 1) {
    throw new Error("Must have at least one product image!")
  }

  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [type, setType] = useState(variant.type)
  const [size, setSize] = useState(variant.size)
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)

  useEffect(() => {
    const newVariant = variants.find(variant => {
      return variant.size === size && variant.type === type
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [size, type, variants, variant.shopifyId])

  // const gallery =
  //   images.length > 1 ? (
  //     <div gap={2} columns={6}>
  //       {/* {images.map(({ src, type }) => (
  //         <Img key={type} src={src} onClick={() => setType(type)} />
  //       ))} */}
  //     </div>
  //   ) : null

  function handleAddToCart() {
    addItemToCart(variant.shopifyId, 1)
    setAddedToCartMessage("🛒 Added to your cart!")
  }

  return (
    <Layout>
      <SEO title={product.title} />
      {addedToCartMessage ? (
        <button
          onClick={() => setAddedToCartMessage(null)}
          className="fixed top-0 right-0 mt-16 mr-6 z-10 bg-gray-100 p-4 border border-gray-300 rounded" variant="primary"
        >
          {addedToCartMessage}
        </button>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen items-center">
        <div className="relative">
          <div>
            <Img fluid={variant.image.localFile.childImageSharp.fluid} className="max-h-screen sticky" />
          </div>
          {/* {gallery} */}
        </div>
        <div className="my-12 md:my-24 mx-4">
          <h1 className="text-3xl md:text-5xl mb-8">{product.title}</h1>
          <div className="mb-4">
            <OptionPicker
              key="Type"
              name="Type"
              options={types}
              selected={type}
              onChange={setType}
            />
            <OptionPicker
              key="Size"
              name="Size"
              options={sizes}
              selected={size}
              onChange={setSize}
            />
          </div>
          <button
            className="inline-block font-heading uppercase border border-black px-4 py-2 rounded-lg text-lg hover:bg-gray-lightest mb-8"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <DescWrapper dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      variants {
        shopifyId
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 446) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
