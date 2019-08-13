import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import home1 from "../../content/assets/home-1.png"
import home2 from "../../content/assets/home-2.png"
import home3 from "../../content/assets/home-3.png"
import home4 from "../../content/assets/home-4.png"
import home5 from "../../content/assets/home-5.png"
import home6 from "../../content/assets/home-6.png"
import home7 from "../../content/assets/home-7.png"
import home8 from "../../content/assets/home-8.png"
import home9 from "../../content/assets/home-9.png"
import home10 from "../../content/assets/home-10.png"
import home11 from "../../content/assets/home-11.png"

class MoodBoard extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <img src={home1} alt="#" />
        <img src={home2} alt="#" />
        <img src={home3} alt="#" />
        <img src={home4} alt="#" />
        <img src={home5} alt="#" />
        <img src={home6} alt="#" />
        <img src={home7} alt="#" />
        <img src={home8} alt="#" />
        <img src={home9} alt="#" />
        <img src={home10} alt="#" />
        <img src={home11} alt="#" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 2),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default MoodBoard

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
