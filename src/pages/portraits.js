import React from "react"
import { navigate } from 'gatsby-link'

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
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function GeneralContactForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout title="Contact">
      <SEO title="Contact Farrah" />

      <ContactForm id="general-contact">
        <h2>Portraits</h2>
        <form 
          name="photoshoot-inquiry"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <label>
              Full Name
              <input type="text" name="photoshoot-name" id="photoshoot-name" onChange={handleChange} />
            </label>
            <label>
              Email
              <input type="email" name="photoshoot-email" id="photoshoot-email" onChange={handleChange} />
            </label>
            <label>
              What would you like to have photographed?
              <textarea name="photoshoot-message" id="photoshoot-message" rows="5" onChange={handleChange} />
            </label>
          <BorderButton type="submit">Send</BorderButton>
        </form>
      </ContactForm>
    </Layout>
  )
}
