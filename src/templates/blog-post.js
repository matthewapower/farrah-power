import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Container = styled.section`
  max-width: 750px;
  margin: 0 auto;
  min-height: 100vh;
`

const Title = styled.h1`
  font-family: garamond-premier-pro-display, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 75px;
  text-align: center;
  max-width: 750px;
  margin: 100px auto;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Title>
          {post.frontmatter.title}
        </Title>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
        </p>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.frontmatter.embed }} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
        
        <Helmet>
          <script type="text/javascript" src={post.frontmatter.embedScript}></script>
        </Helmet>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        embed
        embedScript
      }
    }
  }
`
