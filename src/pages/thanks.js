import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.main`
  max-width: 750px;
  margin: 0 auto;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: initial;
    max-width: 100%;
  }
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
        <SEO title="Thank You" />
        <Container>
          <TextContainer>
            <h1>Thanks!</h1>
            <p>I'll be in touch soon</p>
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
