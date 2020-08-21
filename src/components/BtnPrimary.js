import React from "react"
import { Link } from "gatsby"

export default function BtnPrimary(props) {
  if (props.external) {
    return (
      <a
        href={props.to}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block font-heading uppercase border border-black px-4 py-2 rounded-lg text-lg hover:bg-gray-lightest ${props.className}`}
      >
        {props.children}
      </a>
    )
  }
  return (
    <Link
      to={props.to}
      className={`inline-block font-heading uppercase border border-black px-4 py-2 rounded-lg text-lg hover:bg-gray-lightest ${props.className}`}
    >
      {props.children}
    </Link>
  )
}
