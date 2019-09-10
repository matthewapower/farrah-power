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

const BorderButton = styled.button`
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

const BorderLink = BorderButton.withComponent('a');

const ContactForm = styled.iframe`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 768px) {
    position: relative;
  }
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
          <Title>Thanks for your interest in mini sessions</Title>
          <ButtonWrapper>
            <BorderButton onClick={() => this.showForm('typeform-mini-sessions')}>Book Now</BorderButton>
          </ButtonWrapper>
        </ChoiceContainer>
        <ContactForm title="Wedding Form" id="typeform-mini-sessions" style={{height: `100vh`}} width="100%" frameBorder="0" src="https://farrahpower.typeform.com/to/sp8jIm"></ContactForm> 
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
