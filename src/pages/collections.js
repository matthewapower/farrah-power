import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import BtnPrimary from "../components/BtnPrimary"
import HeadlineFeature from "../components/HeadlineFeature"
import CtaBanner from "../components/CtaBanner"

export default function AboutPage() {
  const collections = [
    {
      image: 'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585512052/Farrah/bg-2_1_tmx4n2.png',
      overline: 'Collection One',
      title: 'The Standard',
      description: 'The most popular collection. This collection is perfect for documenting the highlights of the day.',
      price: '$3,000',
      features: [
        'Seven Hours of Photography',
        'High resolution image files with print rights',
        'Online Gallery with Print Ordering'
      ],
      cta: '/'
    },
    {
      image: 'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585512052/Farrah/bg-2_1_tmx4n2.png',
      overline: 'Collection One',
      title: 'The Standard',
      description: 'The most popular collection. This collection is perfect for documenting the highlights of the day.',
      price: '$3,000',
      features: [
        'Seven Hours of Photography',
        'High resolution image files with print rights',
        'Online Gallery with Print Ordering'
      ],
      cta: '/'
    },
    {
      image: 'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585512052/Farrah/bg-2_1_tmx4n2.png',
      overline: 'Collection One',
      title: 'The Standard',
      description: 'The most popular collection. This collection is perfect for documenting the highlights of the day.',
      price: '$3,000',
      features: [
        'Seven Hours of Photography',
        'High resolution image files with print rights',
        'Online Gallery with Print Ordering'
      ],
      cta: '/'
    }
  ]
  return (
    <Layout>
      <SEO title="Collection" />
      <Hero title="2020 Wedding Collections" image="https://res.cloudinary.com/ds9ng4srx/image/upload/v1585512052/Farrah/bg-2_1_tmx4n2.png"/>
      <HeadlineFeature 
        heading="Fringilla orci viverra ut potenti feugiat vitae." 
        subheading="Fringilla orci viverra ut potenti feugiat vitae. Platea pulvinar aliquet magna."
      />
      {collections.map((c,i) => {
        return (
          <section key={i} className="flex flex-col md:flex-row py-12 px-4 w-full">
            <div className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: `url(${c.image})`}}/>
            <div className="md:mx-4 md:border-t border-b border-black md:w-2/3 py-8 md:pt-40 flex flex-col md:flex-row flex-wrap items-start">
              <div className="md:w-1/2">
                <h2 className="font-heading uppercase text-xl mb-4">{c.overline}</h2>
                <h3 className="font-display-serif text-3xl md:text-5xl mb-4">{c.title}</h3>
                <p className="mb-8">{c.description}</p>
              </div>
              <div className="md:w-1/2">
                <p className="font-display-sans text-3xl mb-8">{c.price}</p>
                <h4 className="font-heading uppercase text-lg mb-4">Includes</h4>
                <ul className="mb-8 md:mb-0">
                  {c.features.map((f,i) => {
                    return <li key={i} className="mb-0">{f}</li>
                  })}
                </ul>
              </div>
              <BtnPrimary to={c.cta}>Set up a Consultation</BtnPrimary>
            </div>
          </section>
        )
      })}
      <span className="bg-black h-px w-full block"/>
      <CtaBanner>I am based in Atlanta but love to travel for clients</CtaBanner>
      <section className="text-center bg-tan py-24 px-4">
        <h2 className="font-heading uppercase text-xl mb-4">What’s next?</h2>
        <h3 className="font-display-serif text-3xl md:text-5xl mb-4">Set Up a Consultation</h3>
        <p className="max-w-md mx-auto mb-8">I would love to find some time, either in-person or on the phone, to talk about which collection interests you and ensure it’s the best fit.</p>
        <BtnPrimary>Let’s do it</BtnPrimary>
      </section>
    </Layout>
  )
}
