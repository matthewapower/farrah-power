import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const SubList = styled.ul`
  margin-left: 0;
  overflow-y: scroll;
  margin: 0;
  transition: max-height 1s;
  max-height: ${props => (props.collapsed === true) ? "0" : "150px"};
  width: 100%;
`

const SubLink = styled.li`
  list-style-type: none;
  margin-left: 0;
`

export default function MenuBlogList(props) {
  const data = useStaticQuery(graphql`
    query MenuLinkQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)
  return (
    <SubList collapsed={props.collapsed}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <SubLink key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </SubLink>
      ))}
    </SubList>
  )
}
