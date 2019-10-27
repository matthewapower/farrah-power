import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;

  a {
    font-family: garamond-premier-pro-display, serif;
    font-weight: 300;
    font-style: normal;
    font-size: 80px;
    margin-bottom: 0.5em;
    text-decoration: none;
    color: hsla(0,0%,0%,0.8);
    position: relative;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: 58px;
      padding: 30px 20px;
      margin: 0 20px;
      border: 2px solid hsla(0,0%,0%,0.8);
    }

    &:after {
      content: '';
      height: 4px;
      width: 180px;
      display: block;
      background-color: hsla(0,0%,0%,0.8);
      position: absolute;
      left: calc(50% - 90px);
      bottom: 0;
      transition: transform 1s ease;
      @media (max-width: 768px) {
        display: none;
      }
    }

    &:hover:after {
      transform: scaleX(2);
    }
  }
`;

export default function CtaFooter() {
  return (
    <Container>
      <Link to="/contact">Let's Make it Happen. Say Hello!</Link>
    </Container>
  )
}
