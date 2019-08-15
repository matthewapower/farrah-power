import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Draggable from 'react-draggable';

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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


class MoodBoard extends React.Component {
  constructor() {
    super()
    this.cW = 0;
    this.cH = 0;
  }

  componentDidMount() {
    this.cW = this.refs.draggableContainer.offsetWidth;
    this.cH = this.refs.draggableContainer.offsetWidth - 300;
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const images = [home1, home2, home3, home4, home5, home6, home7, home8, home9, home10, home11]

    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div ref="draggableContainer" style={{minHeight: '100vh', width: '100vw'}}>
          {images.map((src) => {
            let x = getRandomInt(1000);
            let y = getRandomInt(1000);
            return(
              <Draggable key={src} bounds="parent">
                <img src={src} alt="#" draggable="false" style={{position: 'absolute', top: x + 'px', right: y + 'px', maxWidth: '300px'}}/>
              </Draggable>
            )
          })}
        </div>
        
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
    allMarkdownRemark {
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
