import React from 'react'
import styled from "@emotion/styled"
import tw from 'tailwind.macro'

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
  background-size: cover;
  background-position: center center;
  ${tw`border-b border-black`}
`

export default function Hero(props) {
  const title = props.title
  const image = props.image

  return (
    <>
      <TopBar>
        <h1>{title}</h1>
      </TopBar>
      <ImageFeature style={{backgroundImage: `url(${image})`}}/>
    </>
  )
}
