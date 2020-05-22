
import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaBanner from "../components/CtaBanner"
import BtnPrimary from "../components/BtnPrimary"

export default function Shop() {
  const data = useStaticQuery(graphql`
    query ShopQuery {
      allShopifyProduct(sort: {fields: title, order: ASC}) {
        nodes {
          title
          handle
          images {
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
  `)
  let sliderImages = [
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508209/Farrah/slider-1_wcdg7q.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-3_nkk1pi.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-4_ctmw3j.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508211/Farrah/Slider-2_lgqomj.png'
  ]

  return (
    <Layout message="Photos Worth Keeping*">
      <SEO title="Home" />
      <header className="flex md:items-end md:justify-end px-4 md:mt-40 mb-12">
        <h1 className="text-6xl">Shop</h1>
      </header>
      <section className="px-4 grid md:grid-cols-2 gap-12 border-b border-black pb-12">
        {data.allShopifyProduct.nodes.map((b, i) => {
          return (
            <Link to={`/product/${b.handle}`} className="hover:opacity-75 relative bg-tan rounded-lg h-screen-50 md:h-screen-75">
              <h2 className="text-xl md:text-3xl text-center mx-4 mt-4 md:mt-12 font-display">{b.title}</h2>
              <Img 
                fluid={b.images[0].localFile.childImageSharp.fluid} 
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
                placeholderStyle={{display: "none"}}
                style={{position: 'absolute', overflow: 'visible'}} 
                className="inset-0 m-8 mt-12 md:m-24"
              />
            </Link>
          )
        })}
      </section>
      <CtaBanner>I am based in Atlanta but am happy to pack my suitcase and travel to your city!</CtaBanner>
      <section className="py-24 flex flex-col items-center">
        <h2 className="font-display-sans text-center text-3xl md:text-5xl mb-8">Think we would work well together?</h2>
        <BtnPrimary to="/contact">Contact Me</BtnPrimary>
        <div className="mt-12 w-screen flex">
          {sliderImages.map((s,i) => {
            return (
              <div key={i} style={{backgroundImage: `url(${s})`}} className={`bg-cover bg-center h-24 md:h-64 w-1/2 md:w-1/4 ${i === sliderImages.length - 1 ? 'mr-0' : 'mr-4 md:mr-12'}`}/>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
