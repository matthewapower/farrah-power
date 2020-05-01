import React from 'react'

export default function HeadlineFeature(props) {
  const heading = props.heading
  const subheading = props.subheading
  return (
    <section className="border-b border-black py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display-serif leading-relaxed text-3xl md:text-5xl">{heading}</h2>
          <h3 className="font-display-sans leading-relaxed text-3xl md:text-5xl max-w-4xl mx-auto">{subheading}</h3>
        </div>
      </section>
  )
}
