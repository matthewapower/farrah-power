import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import tw from "tailwind.macro"
import Img from "gatsby-image"
import CtaBanner from "../components/CtaBanner"
import BtnPrimary from "../components/BtnPrimary"

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  ${tw`border-b border-black pt-12`}

  a {
    font-family: garamond-premier-pro-display, serif;
    font-weight: 300;
    font-style: normal;
    font-size: 80px;
    margin-bottom: 0.5em;
    text-decoration: none;
    color: hsla(0,0%,0%,0.8);
    position: relative;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: 58px;
      padding: 30px 20px;
      margin: 0 20px;
      border: 2px solid hsla(0,0%,0%,0.8);
    }

    &:after {
      content: '';
      height: 4px;
      width: 180px;
      display: block;
      background-color: hsla(0,0%,0%,0.8);
      position: absolute;
      left: calc(50% - 90px);
      bottom: 0;
      transition: transform 1s ease;
      @media (max-width: 768px) {
        display: none;
      }
    }

    &:hover:after {
      transform: scaleX(2);
    }
  }
`;


const BackgroundCover = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: opacity 2s ease;
`

const TopImage = styled(Img)`
  width: 500px;
  height: 600px;

  @media (max-width: 768px) {
    width: 80vw;
    height: 60vh;
  }
`

const BottomImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
`

const Card = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);

  .gatsby-image-wrapper {
    transition: transform 0.5s ease;
    transform: scale(1);
  }

  &:hover .gatsby-image-wrapper {
    transform: scale(1.01);
  }

  span {
    width: 100%;
  }
`

export default function Index(props) {
  const data = props.data
  let sliderImages = [
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508209/Farrah/slider-1_wcdg7q.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-3_nkk1pi.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-4_ctmw3j.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508211/Farrah/Slider-2_lgqomj.png'
  ]
  const slides = [
    {
      url: "intimate-backyard-wedding",
      title: "Intimate Backyard Wedding",
      topImage: data.topImage4.childImageSharp.fluid,
      bottomImage: data.bottomImage4.childImageSharp.fluid
    },
    {
      url: "joshua-tree-elopement",
      title: "Joshua Tree Elopement",
      topImage: data.topImage1.childImageSharp.fluid,
      bottomImage: data.bottomImage1.childImageSharp.fluid
    },
    {
      url: "summerour-studio-wedding",
      title: "Summerour Studio Wedding",
      topImage: data.topImage2.childImageSharp.fluid,
      bottomImage: data.bottomImage2.childImageSharp.fluid
    }
  ];

  return (
    <Layout location={props.location} message="Photos Worth Keeping*">
      <SEO title="Home" />
      <div className="flex flex-col">
        {slides.map((slide, index) => {
          return (
            <BackgroundCover key={slide.url}>
              <BottomImage 
                fluid={slide.bottomImage}
                alt={slide.title}
                fadeIn={false}
                style={{
                  position: "absolute"
                }}
              />
              <Card to={"/" + slide.url}>
                <TopImage 
                  fluid={slide.topImage}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  backgroundColor="#F6F1EC"
                  alt={slide.title}
                />
                <h2 className="absolute inset-0 text-center flex items-center justify-center text-3xl md:text-6xl md:-mx-40">{slide.title}</h2>
              </Card>
            </BackgroundCover>
          )}
        )}
      </div>
      <Container>
        <Link to="/work">View More Work</Link>
      </Container>
      <CtaBanner>I am based in Atlanta but am happy to pack my suitcase and travel to your city!</CtaBanner>
      <section className="py-24 flex flex-col items-center">
        <h2 className="font-display-sans text-center text-3xl md:text-5xl mb-8">Think we would work well together?</h2>
        <BtnPrimary to="/contact">Contact Me</BtnPrimary>
        <div className="mt-12 w-screen flex">
          {sliderImages.map((s,i) => {
            return (
              <div key={i} style={{backgroundImage: `url(${s})`}} backgroundColor="#F6F1EC" className={`bg-cover bg-center h-24 md:h-64 w-1/2 md:w-1/4 ${i === sliderImages.length - 1 ? 'mr-0' : 'mr-4 md:mr-12'}`}/>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    topImage1: file(absolutePath: {regex: "/front-jt.png/"}) {
      childImageSharp {
        fluid(maxWidth: 430, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bottomImage1: file(absolutePath: {regex: "/back-jt.png/"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    topImage2: file(absolutePath: {regex: "/front-so.png/"}) {
      childImageSharp {
        fluid(maxWidth: 430, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bottomImage2: file(absolutePath: {regex: "/back-so.png/"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    topImage4: file(absolutePath: {regex: "/front-4.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 430, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bottomImage4: file(absolutePath: {regex: "/back-4.png/"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

