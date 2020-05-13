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

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }
`

const SubLink = styled.li`
  list-style-type: none;
  margin-left: 0;
`

export default function MenuBlogList(props) {
  const data = useStaticQuery(graphql`
    query MenuLinkQuery {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
      <SubLink>
        <Link to="/work">View All</Link>
      </SubLink>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <SubLink key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </SubLink>
      ))}
    </SubList>
  )
}
