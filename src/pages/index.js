import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const BackgroundCover = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TopImage = styled(props => <Img {...props} />)`
  width: 500px;
  height: 600px;
  position: relative;
  z-index: -1;
`

const BottomImage = styled(props => <Img {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

class MoodBoard extends React.Component {
  render() {
    const data = this.props.data;
    const images = [
      {
        topImage: data.topImage1.childImageSharp.fixed,
        bottomImage: data.bottomImage1.childImageSharp.fluid
      },
      {
        topImage: data.topImage2.childImageSharp.fixed,
        bottomImage: data.bottomImage2.childImageSharp.fluid
      },
      {
        topImage: data.topImage3.childImageSharp.fixed,
        bottomImage: data.bottomImage3.childImageSharp.fluid
      }
    ];

    console.log(images)
    return (
      <Layout location={this.props.location} message="Photos Worth Keeping*">
        <SEO title="All posts" />
        {images.map((data) => (
          <BackgroundCover>
            <BottomImage 
              fluid={data.bottomImage}
              alt="#"
              style={{
                position: "absolute"
              }}
            />
            <Link to="/contact">
              <TopImage 
                fixed={data.topImage}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="#"
              />
              Blog Name
            </Link>
          </BackgroundCover>
        ))}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    topImage1: file(absolutePath: {regex: "/front-1.jpg/"}) {
      childImageSharp {
        fixed(width: 1000, pngCompressionSpeed: 10) {
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
        fixed(width: 1000, pngCompressionSpeed: 10) {
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
        fixed(width: 1000, pngCompressionSpeed: 10) {
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
