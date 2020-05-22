import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useState, useEffect, useMemo } from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import {useAddItemToCart} from 'gatsby-theme-shopify-manager';
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
  }

  return (
    <Layout>
      <SEO title={product.title} />
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl md:text-5xl my-8 text-center">{product.title}</h1>
        <div className="relative">
          <div className="mb-12">
            <Img 
              fluid={variant.image.localFile.childImageSharp.fluid} 
              imgStyle={{
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                  top: "50%",
                  left: "50%",
                  transform: 'translate(-50%, -50%)',
                  maxHeight: "100%",
                  boxShadow: "rgba(0, 0,0, 0.15) 10px 2px 40px"
                }} 
                style={{ overflow: 'visible'}} 
              className="max-h-screen-75"
            />
          </div>
          {/* {gallery} */}
        </div>
        <div className="my-12 md:my-0 mx-4 md:mx-auto md:max-w-md">
          <h1 className="text-3xl md:text-5xl my-8">${variant.price}</h1>
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
            className="inline-block font-heading uppercase border border-black px-4 py-2 rounded-lg text-lg hover:bg-gray-lightest mb-8 relative z-20"
            onClick={() => handleAddToCart()}
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
        price
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
