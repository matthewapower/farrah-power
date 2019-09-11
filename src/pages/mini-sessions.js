import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

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

const BorderButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  text-decoration: none;
  padding: 10px 0;
  margin: 10px;
  font-family: poppins, 'sans-serif';
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`

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

const BackgroundImg = styled(props => <Img {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const InfoGrid = styled.p`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rowss: 1fr 1fr;
  max-width: 300px;
  min-height: 100px;
  position: relative;

  span:nth-child(2):before,
  span:nth-child(3):before {
    content: '';
    position: absolute;
    background-color: white;
    width: 1px;
    min-height: 80%;
    top: 0;
    transform: translateX(-10px);
  }
`

const OverText = styled.div`
  color: white;

  h1 {
    font-size: 100px;
    font-weight: 100;

    @media (max-width: 425px) {
      font-size: 20vw
    }
  }

  p {
    max-width: 300px;
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
    console.log(data.background)


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Mini Sessions for Fall 2019" />

        <ChoiceContainer id="choiceContainer">
          <BackgroundImg
            fluid={data.background.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="center center"
            alt="#"
            style={{position: "absolute"}}
          />
          <OverText>
            <h1>Mini Sessions</h1>
            <InfoGrid>
              <span>Mintues:</span>
              <span>15</span>
              <span>30</span>
              <span>Photos:</span>
              <span>10-15</span>
              <span>20-30</span>
            </InfoGrid>
            <p>All include edited, high resolution files delivered through an online gallery.</p>
            <BorderButton onClick={() => this.showForm('typeform-mini-sessions')}>Book Now</BorderButton>
          </OverText>
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
    background: file(absolutePath: {regex: "/mini-sessions.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          src
          srcSet
        }
      }
    }
  }
`
