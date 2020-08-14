import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SubList = styled.ul`
  margin-left: 0;
  overflow-y: scroll;
  margin: 0;
  transition: all 1s;
  max-height: ${props => (props.active ? "150px" : "0")};
  width: 100%;
  padding-top: ${props => (props.active ? "10px" : "0")};

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

export default function MenuList(props) {
  return (
    <div className="w-full">
      <button
        className="block w-full text-left focus:outline-none uppercase"
        onClick={() =>
          props.setActive(
            props.active === props.children ? false : props.children
          )
        }
      >
        {props.children}
      </button>
      <SubList active={props.active === props.children}>
        {props.links.map((l, i) => {
          return (
            <SubLink key={i}>
              <Link to={l.to}>{l.name}</Link>
            </SubLink>
          )
        })}
      </SubList>
    </div>
  )
}
