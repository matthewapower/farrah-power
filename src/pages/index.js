import React from "react"
import {graphql} from "gatsby"
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
    const images = this.props.data;

    console.log(images)
    return (
      <Layout location={this.props.location} message="Photos Worth Keeping*">
        <SEO title="All posts" /> 
        <BackgroundCover>
        <BottomImage 
            fluid={images.bottomImage.childImageSharp.fluid}
            alt="#"
            style={{
              position: "absolute"
            }}
          />
          <TopImage 
            fixed={images.topImage.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="#"
          />
        </BackgroundCover>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    topImage: file(absolutePath: {regex: "/home-5.jpg/"}) {
      childImageSharp {
        fixed(width: 1000, pngCompressionSpeed: 10) {
          srcSet
          src
        }
      }
    }
    bottomImage: file(absolutePath: {regex: "/home-7.jpg/"}) {
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
