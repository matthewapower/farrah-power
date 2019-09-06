import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const BackgroundCover = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &:first-child {
    display: flex;
  }
`
const TopImage = styled(props => <Img {...props} />)`
  width: 500px;
  height: 600px;
  position: relative;
  z-index: -1;

  @media (max-width: 768px) {
    width: 80vw;
    height: 60vh;
  }
`

const BottomImage = styled(props => <Img {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const Card = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: 100%;
  }
`

class MoodBoard extends React.Component {
  
  componentDidMount() {
    let slides = document.querySelectorAll('.slideContainer > div');
    let activeSlide = 0;

    setInterval(() => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
      }
      slides[activeSlide].style.display = "flex";

      console.log(slides.length)

      if (activeSlide === slides.length - 1) {
        activeSlide = 0;
      } else {
        activeSlide++;
      }
    }, 10000);
  }

  render() {
    const data = this.props.data;
    const images = [
      {
        url: "summerour-studio-wedding",
        topImage: data.topImage1.childImageSharp.fixed,
        bottomImage: data.bottomImage1.childImageSharp.fluid
      },
      {
        url: "joshua-tree-elopment",
        topImage: data.topImage2.childImageSharp.fixed,
        bottomImage: data.bottomImage2.childImageSharp.fluid
      },
      {
        url: "manzanita-couples-shoot",
        topImage: data.topImage3.childImageSharp.fixed,
        bottomImage: data.bottomImage3.childImageSharp.fluid
      }
    ];

    return (
      <Layout location={this.props.location} message="Photos Worth Keeping*">
        <SEO title="Home" />
        <div className="slideContainer">
          {images.map((data) => (
            <BackgroundCover key={data.url}>
              <BottomImage 
                fluid={data.bottomImage}
                alt="#"
                style={{
                  position: "absolute"
                }}
              />
              <Card to="/contact">
                <TopImage 
                  fixed={data.topImage}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="#"
                />
                <span>Blog Name</span>
              </Card>
            </BackgroundCover>
          ))}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    topImage1: file(absolutePath: {regex: "/front-1.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage1: file(absolutePath: {regex: "/back-1.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
    topImage2: file(absolutePath: {regex: "/front-2.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage2: file(absolutePath: {regex: "/back-2.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
    topImage3: file(absolutePath: {regex: "/front-3.jpg/"}) {
      childImageSharp {
        fixed(width: 1000) {
          srcSet
          src
        }
      }
    }
    bottomImage3: file(absolutePath: {regex: "/back-3.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
  }
`

export default MoodBoard
