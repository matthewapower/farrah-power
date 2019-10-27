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

class GeneralContactForm extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Farrah" />

        <ContactForm id="general-contact">
          <h2>Contact</h2>
          <form name="contact-general" method="post" data-netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <label>
              Full Name
              <input type="text" name="contact-name" id="contact-name" />
            </label>
            <label>
              Email
              <input type="email" name="contact-email" id="contact-email" />
            </label>
            <label>
              Message
              <textarea name="contact-message" id="contact-message" rows="5" />
            </label>
            <BorderButton type="submit">Send</BorderButton>
          </form>
        </ContactForm>
      </Layout>
    )
  }
}

export default GeneralContactForm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
