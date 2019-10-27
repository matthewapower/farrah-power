import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaFooter from "../components/CtaFooter"
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
  margin: 100px auto 50px;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 42px;
    margin: 40px auto 50px;
  }
`

const ContinueLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
  font-size: 20px;
`

const PostContent = styled.div`
  text-align: center;
  margin-bottom: 100px;

  ul {
    list-style: none;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const NavControls = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  listStyle: none;
  padding: 0;
  margin: 40px 0;
  list-style: none;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

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

        <Container>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <div dangerouslySetInnerHTML={{ __html: post.frontmatter.embed }} />
          <NavControls>
            <li>
              {previous && (
                <ContinueLink to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </ContinueLink>
              )}
            </li>
            <li>
              {next && (
                <ContinueLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </ContinueLink>
              )}
            </li>
          </NavControls>
        </Container>
        
        <Helmet>
          <script type="text/javascript" src={post.frontmatter.embedScript}></script>
        </Helmet>
        <CtaFooter />
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
