import React, { useState, useEffect } from "react"
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
`

const NavControls = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  liststyle: none;
  padding: 0;
  margin: 40px 0;
  list-style: none;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export default function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const buffer = 200
    if (window.scrollY > buffer && scrolled === false) {
      setScrolled(true)
    } else if (window.scrollY < buffer && scrolled === true) {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled, handleScroll])

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Title>{post.frontmatter.title}</Title>

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
      <button
        className={` flex-col items-center fixed hidden md:flex font-heading uppercase text-xs bottom-0 right-0 text-black mb-12 mr-24 focus:outline-none transition-transform duration-300 transform translate-x-0 hover:opacity-75 ${
          scrolled ? "transform translate-x-0" : "transform translate-x-64"
        }`}
        onClick={() => {
          console.log(window.scrollTo(0, 0))
        }}
      >
        <svg viewBox="0 0 50 50" style={{ maxWidth: "20px" }} className="mb-2">
          <polyline
            points="25,10 25,50"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLineCap="round"
            strokeLinejoint="round"
          />
          <polyline
            points="10,15 25,0 40,15"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoint="round"
          />
        </svg>
        Back to Top
      </button>

      <Helmet>
        <script
          type="text/javascript"
          src={post.frontmatter.embedScript}
        ></script>
      </Helmet>
      <CtaFooter />
    </Layout>
  )
}

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
