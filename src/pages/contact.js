import React from "react"
import { graphql } from "gatsby"

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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const BorderButton = styled.button`
  border: 2px solid black;
  background-color: transparent;
  color: black;
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px;
  font-weight: 600;

  :hover {
    background-color: black;
    color: white;
  }
`

const BorderLink = BorderButton.withComponent('a');

const ContactForm = styled.iframe`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
  }

  showForm(showId) {
    document.getElementById(showId).style.display = "block";
    document.getElementById('choiceContainer').style.display = "none";
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Farrah" />

        <ChoiceContainer id="choiceContainer">
          <h2>What would you like to inquire about?</h2>
          <ButtonWrapper>
            <BorderButton onClick={() => this.showForm('typeform-full-wedding')}>Weddings</BorderButton>
            <BorderButton onClick={() => this.showForm('typeform-full-photoshoot')}>Photoshoots</BorderButton>
            <BorderLink href="mailto:hello@farrahpower.com?subject=General%20Inquiry">Other</BorderLink>
          </ButtonWrapper>
        </ChoiceContainer>
        <ContactForm title="Wedding Form" id="typeform-full-wedding" style={{height: `100vh`}} width="100%" frameBorder="0" src="https://farrahpower.typeform.com/to/D9ELVQ"></ContactForm> 
        <ContactForm title="Photoshoot Form" id="typeform-full-photoshoot" style={{height: `100vh`}} width="100%" frameBorder="0" src="https://farrahpower.typeform.com/to/VUHTSb"></ContactForm>
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
