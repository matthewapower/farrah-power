import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import tf from "https://embed.typeform.com/embed.js"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Farrah" />
        <iframe id="typeform-full" style={{height: `90vh`}} width="100%" frameborder="0" src="https://farrahpower.typeform.com/to/D9ELVQ"></iframe> 
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
