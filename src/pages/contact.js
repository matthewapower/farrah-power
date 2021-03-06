import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ChoiceContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 5vw;
    width: 90vw;
    position: static;
    height: 80vh;
  }
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    margin: 0 5vw;
    width: 90vw;
    flex-direction: column;
  }
`

const BorderButton = styled(Link)`
  background-color: transparent;
  border: none;
  color: black;
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px;
  font-family: poppins, 'sans-serif';
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Farrah" />

        <ChoiceContainer id="choiceContainer">
          <Title>What would you like to inquire about?</Title>
          <ButtonWrapper>
            <BorderButton to="/weddings">Weddings</BorderButton>
            <BorderButton to="/portraits">Portraits</BorderButton>
            <BorderButton to="/inquiry">Other</BorderButton>
          </ButtonWrapper>
        </ChoiceContainer>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
