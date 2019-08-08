import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.ul`
  border: 2px solid black;
  list-style: none;
  padding: 0;
  background-color: rgba(255,255,255,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
  margin: 1rem;
`

const Item = styled.li`
  border-bottom: 2px solid black;
  margin-bottom: 0;
  padding: .5rem;
  font-size: 14px;
  font-family: neue-haas-grotesk-display, sans-serif;
  text-transform: uppercase;

  &:last-child {
    border-bottom: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

const Menu = ({data}) => {
  <Container>
    <Item><Link to="/">Farrah Power</Link></Item>
    <Item className="show-trigger">
      Work
      <ul>
        </ul> 
         { {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></li>
         ))} }

      </ul>
    </Item>
    <Item><Link to="/about">About</Link></Item>
    <Item><Link to="/contact">Contact</Link></Item>
    <Item>Maui 78 F</Item>
  </Container>
}

export const menuQuery = graphql`
  query menuQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
          id
        }
      }
    }
  }
`

export default Menu
