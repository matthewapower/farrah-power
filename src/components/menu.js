import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuList from "../components/menu-list"
import SocialIcons from "../components/socialIcons"
import styled from "styled-components"
import logo from "../../content/assets/logo.svg"

const Container = styled.ul`
  list-style: none;
  padding: 0;
  background-color: ${props =>
    props.minimized ? "transparent" : "rgba(255,255,255,0.7)"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  margin: 1rem;
  z-index: 1;
  transition: all 0.5s ease;

  &:after {
    content: '';
    position: absolute;
    border: 1px solid black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    opacity ${props => (props.minimized ? "0" : "1")};
  }


  & > li:first-child {
    border-bottom: none;
    transition: all 0.5s ease;
    position: relative;
    height: 56px;

    &:after {
      content: '';
      position: absolute;
      height: 1px;
      background-color: black;
      left: 0;
      right: 0;
      bottom: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
      opacity ${props => (props.minimized ? "0" : "1")};
    }
  }

  li:nth-child(n + 2) {
    transition: all 0.5s ease;
    opacity: ${props => (props.minimized ? "0" : "1")};
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 5vw;
    max-width: 90vw;
    max-height: 56px;
    max-height: ${props => (props.minimized ? "56px" : "500px")};
  }
`

const LogoLink = styled(props => <Link {...props} />)`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
`

const Item = styled.li`
  border-bottom: 1px solid black;
  margin-bottom: 0;
  padding: 0.5rem;
  font-size: 14px;
  font-family: poppins, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.col ? "start" : "center")};
  flex-direction: ${props => (props.col ? "column" : "row")};

  &:last-child {
    border-bottom: none;
  }

  a {
    color: black;
    text-decoration: none;
  }

  & > button {
    background: transparent;
    border: none;
    text-transform: uppercase;
    padding: 0;
    outline: none;
    cursor: pointer;
  }
`

const MessageTitle = styled.h1`
  position: fixed;
  top: 40px;
  right: 27px;
  font-size: 18px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`

const Burger = styled.button`
  height: 24px;
  width: 24px;
  padding: 12px;
  position: relative;
  transition: transform 0.5s ease;
  transform: ${props => (props.navHidden ? "rotate(0)" : "rotate(135deg)")};

  &:after,
  &:before {
    content: "";
    position: absolute;
    background-color: black;
    width: 2px;
    top: 0;
    bottom: 0;
    left: calc(50% - 1px);
  }

  &:after {
    transform: rotate(90deg);
  }

  @media (min-width: 769px) {
    display: none;
  }
`

export default function Menu(props) {
  const [navHidden, setNavHidden] = useState(false)
  const [activeSub, setActiveSub] = useState(false)
  const blogs = useStaticQuery(graphql`
    query MenuLinkQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
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
  `)
  const infoLinks = [
    { name: "About", to: "/about" },
    { name: "Albums", to: "/albums" },
    { name: "FAQ", to: "/faq" },
    { name: "Contact", to: "/contact" },
  ]
  const workLinks = [{ name: "View All", to: "/work" }]

  blogs.allMarkdownRemark.nodes.map((b, i) => {
    return workLinks.push({ name: b.frontmatter.title, to: b.fields.slug })
  })

  return (
    <div>
      <Container minimized={navHidden}>
        <Item>
          <LogoLink to="/">
            <img src={logo} alt="#" />
          </LogoLink>
          <Burger
            navHidden={navHidden}
            onClick={() => setNavHidden(!navHidden)}
          />
        </Item>
        <Item>
          <MenuList
            active={activeSub}
            setActive={setActiveSub}
            links={workLinks}
          >
            Work
          </MenuList>
        </Item>
        <Item>
          <MenuList
            active={activeSub}
            setActive={setActiveSub}
            links={infoLinks}
          >
            Info
          </MenuList>
        </Item>
        <Item>
          <Link to="/shop">Print Shop</Link>
        </Item>
        <Item>
          {/* <div>Maui 78 F</div> */}
          <SocialIcons />
        </Item>
      </Container>
      <MessageTitle>{props.message}</MessageTitle>
    </div>
  )
}
