import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import moodboard from "../../content/assets/moodboard.png"

const TopBar = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  min-height: 300px;
  border-bottom: 1px solid black;

  h1 {
    font-size: 60px;
    font-weight: 500;
  }
`

const ImageFeature = styled.div`
  width: 100%;
  min-height: 80vh;
  background-image: url(${moodboard});
  background-size: cover;
  background-position: center center;
`

const FeaturedSection = styled.section`
  text-align: center;
  padding: 100px 0;
  border: 1px solid black;
  border-left: 0;
  border-right: 0;

  h2, h3 {
    font-size: 60px;
    font-weight: 100;
    margin-bottom: 0;
  }

  h3 {
    font-family: neue-haas-grotesk-display;
    line-height: 80px;
    letter-spacing: 2px;
    max-width: 75%;
    margin: 0 auto;
  }
` 

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <TopBar>
        <h1>About Farrah</h1>
      </TopBar>
      <ImageFeature />
      <FeaturedSection>
        <h2>At this moment I am probably...</h2>
        <h3>Planning next travels, reacting to food, or meticulously tracking incremental changes in nature</h3>
      </FeaturedSection>
    </Layout>
  )
}

