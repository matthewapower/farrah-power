
import React, { useState } from "react"

export default function OptionPicker({ name, options, onChange, selected }) {
  const [active, setActive] = useState(options[0])

  return (
    <div className="mb-4">
      <p className="font-heading uppercase mb-2">{name}</p>
      <div value={selected} className={`flex`}>
        {options.map((option, i) => {
          return (
          <button 
            value={option} 
            key={option}
            className={`inline-block font-heading uppercase border border-black px-2 py-1 rounded-lg text-sm mr-2 hover:bg-gray-lightest ${(active === option) ? '' : 'opacity-25'}`}
            onClick={() => {
              setActive(option)
              onChange(option)
            }}
          >
            {option}
          </button>
        )})}
      </div>
    </div>
  )
}