import React from 'react'
import BtnPrimary from './BtnPrimary'

export default function CtaBanner(props) {
  return (
    <section className="border-b border-black flex flex-col md:flex-row items-center justify-between p-4 hidden md:flex">
      <h2 className="text-center md:text-left text-xl md:text-base font-body tracking-wide mb-4 md:mb-0 w-64 md:w-full">{props.children}</h2>
      <BtnPrimary to={props.to ? props.to : "/contact"} external={props.external ? true : false}>{props.btnText ? props.btnText : 'Contact'}</BtnPrimary>
    </section>
  )
}
