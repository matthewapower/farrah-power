import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaBanner from "../components/CtaBanner"
import BtnPrimary from "../components/BtnPrimary"

export default function Work() {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
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
      <header className="flex md:items-end md:justify-end px-4 md:mt-32 mb-12">
        <h1 className="text-6xl">Work</h1>
      </header>
      <section className="px-4 grid md:grid-cols-2 gap-8 border-b border-black pb-12">
        {data.allMarkdownRemark.nodes.map((b, i) => {
          return (
            <Link to={b.fields.slug} className="hover:opacity-75">
              <Img fluid={b.frontmatter.featuredImage.childImageSharp.fluid} className="h-64 md:h-screen mb-4"/>
              <h2 className="text-3xl">{b.frontmatter.title}</h2>
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
