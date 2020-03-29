import React from 'react'
import { Link } from 'gatsby'

export default function BtnPrimary(props) {
  return <Link to={props.to} className="inline-block font-heading uppercase border border-black px-4 py-2 rounded-lg text-lg hover:bg-gray-lightest">{props.children}</Link>
}
