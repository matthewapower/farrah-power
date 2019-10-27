import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

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

const ContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px 0;

  @media (max-width: 768px) {
    position: relative;
  }

  form {
    width: calc(100% - 40px);
    max-width: 600px;
  }

  form,
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    font-family: poppins;
  }

  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #999;

    &:active,
    &:focus,
    &:visited {
      border-bottom: 2px solid black;
    }

    &::placeholder {
      color: #FAFAFA;
    }
  }

  textarea {
    resize: none;
    border: 2px solid #999;

    &:active,
    &:focus,
    &:visited {
      border: 2px solid black;
    }
  }
`

class WeddingForm extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Farrah" />

        <ContactForm id="full-wedding">
          <h2>Weddings</h2>
          <form name="contact-wedding" method="post" data-netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <label>
              Your Full Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Your Partner's Full Name
              <input type="text" name="partner-name" id="partner-name" />
            </label>
            <label>
              What's Your Email Address?
              <input type="email" name="email" id="email" />
            </label>
            <label>
              What's Your Wedding Date?
              <input type="date" name="weddingdate" id="weddingdate" />
            </label>
            <label>
              Where is Your Wedding Going to Be?
              <input type="text" name="location" id="location" />
            </label>
            <label>
              What's a Good Phone Number to Reach You?
              <input type="text" name="phone" id="phone" />
            </label>
            <label>
              Tell Me About the Two of You!
              <textarea name="about" id="about" rows="5" resize="none" />
            </label>
            <label>
              What is the most important to you on your wedding day?
              <textarea name="message" id="message" rows="5" resize="none" />
            </label>
            <label>
              How did you discover my work?
              <input type="text" name="refferal" id="refferal" />
            </label>
            <BorderButton type="submit">Send</BorderButton>
          </form>
        </ContactForm>
      </Layout>
    )
  }
}

export default WeddingForm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
