import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.ul`
  border: 2px solid black;
  list-style: none;
  padding: 0;
  background-color: rgba(255,255,255,0.5);
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
`

const Menu = () => {
  return (
    <Container>
      <Item>Farrah Power</Item>
      <Item>Work</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Item>Maui 78 F</Item>
    </Container>
  )
}

export default Menu
