import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import headshot from "../../content/assets/about.png"

const Container = styled.main`
  max-width: 750px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    margin-left: initial;
    max-width: 100%;
  }
`

const AboutImg = styled.img`
  max-width: 250px;
  display: block;
  margin: 0 auto;
`

const TextContainer = styled.div`
  max-width: 475px;
  margin: 0 auto 0;
  text-align: center;

  h1 {
    font-family: garamond-premier-pro-display, serif;
    font-weight: 300;
    font-style: normal;
    font-size: 100px;
    margin-bottom: 0.1em;
  }

  p {
    font-family: garamond-premier-pro, serif;
    font-weight: 400;
    font-style: normal;
  }
`

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Container>
          <AboutImg src={headshot} alt="#"/>
          <TextContainer>
            <h1>Meet Farrah</h1>
            <p>For the past five years Farrah has been photographing weddings and elopments. She has found her niche in documentary style wedding photography because of the way it produces meaningful and honest imagery that gets better over time. Farrah and her husband Matt live in Atlanta, GA but continue to fall in love with the cities their travels bring them to.</p>
          </TextContainer>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
