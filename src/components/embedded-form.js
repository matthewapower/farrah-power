import React from 'react'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  width: 100%;
  min-height: 100vh;
`

export default function EmbeddedForm(props) {
  return (
    <div id="general-contact">
      <StyledIframe id={props.taveId} src={props.taveUrl} frameborder="0"></StyledIframe>
    </div>
  )
}
