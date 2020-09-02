import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

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
  const post = props.data.contentfulWorkEntry
  const siteTitle = props.data.site.siteMetadata.title
  let narrativeId = post.narrativeCode.narrativeCode
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

  console.log(narrativeId)
  const searchTerm = "data-post-id='"
  narrativeId = narrativeId.slice(
    narrativeId.search(searchTerm) + searchTerm.length
  )
  console.log(narrativeId)
  narrativeId = narrativeId.slice(0, narrativeId.search("'"))
  console.log(narrativeId)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.title} />
      <Title>{post.title}</Title>

      <Container>
        {post.content ? (
          <PostContent
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        ) : (
          ""
        )}
        <div>
          <div
            className="nar-root"
            data-post-id={narrativeId}
            css={css`
              p {
                text-align: center;
                opacity: 0;
                animation: nara 0s ease-in 2s forwards;
              }
              @keyframes nara {
                to {
                  opacity: 1;
                }
              }
            `}
          >
            <img
              style={{ width: "100%" }}
              src={`https://content1.getnarrativeapp.com/static/${narrativeId}/featured.jpg`}
            />
          </div>
        </div>
        <NavControls>
          <li>
            {previous && (
              <ContinueLink to={`/${previous.slug}`} rel="prev">
                ← {previous.title}
              </ContinueLink>
            )}
          </li>
          <li>
            {next && (
              <ContinueLink to={`/${next.slug}`} rel="next">
                {next.title} →
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
          window.scrollTo(0, 0)
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
          src={`https://service.getnarrativeapp.com/core/embed/r/${narrativeId}.js`}
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
    contentfulWorkEntry(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      narrativeCode {
        narrativeCode
      }
    }
  }
`
