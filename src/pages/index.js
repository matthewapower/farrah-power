import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import home5 from "../../content/assets/home-5.png"
import home7 from "../../content/assets/home-7.png"

const BackgroundCover = styled.div`
  position: fixed;
  top: -20px;
  left: -20px;
  bottom: -20px;
  right: -20px;
  display: flex;
  align-items: center;
  justify-content: center
  background-image: url(${home7});
  background-size: cover;
`

class MoodBoard extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} message="Photos Worth Keeping*">
        <SEO title="All posts" /> 
        <BackgroundCover>
          <img src={home5} alt="#"/>
        </BackgroundCover>
      </Layout>
    )
  }
}

export default MoodBoard
