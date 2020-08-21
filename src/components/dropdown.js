import React, { useState } from "react"

export default function Dropdown(props) {
  const [active, setActive] = useState(false)
  return (
    <div className="w-full mb-6 border-b border-black">
      <button
        onClick={() => setActive(!active)}
        className="w-full focus:outline-none flex justify-between items-center"
      >
        <h2 className="font-display-sans text-xl mb-4 mr-4 text-left col-span-5 leading-7">
          {props.question}
        </h2>
        <span className="font-display-sans text-xl mb-4 text-right">
          {active ? "–" : "+"}
        </span>
      </button>
      <p
        style={{ display: active ? "block" : "none" }}
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: props.answer }}
      />
    </div>
  )
}
