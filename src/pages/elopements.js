import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import BtnPrimary from "../components/BtnPrimary"
import CtaBanner from "../components/CtaBanner"

export default function AboutPage() {
  const [access, setAccess] = useState(false)
  const [val, setVal] = useState()
  const collections = [
    {
      image: 'https://res.cloudinary.com/ds9ng4srx/image/upload/v1588347792/Farrah/0380_yizcz7.jpg',
      title: 'Elopement',
      description: 'This is great for someone who wants to keep it simple with enough time to cover just the highlights.',
      price: '$1,500',
      features: [
        'Up to 3 hours of photography',
        'High resolution image files with print rights',
        'Online Gallery with Print Ordering'
      ],
      cta: 'https://calendly.com/hello-farrah/elopements'
    }
  ]

  if (access) {
    return (
      <Layout>
        <SEO title="Collections" />
        <Hero title={`Elopements`} image="https://res.cloudinary.com/ds9ng4srx/image/upload/v1588347609/Farrah/Portland0186_ahv6t3.jpg"/>
        {collections.map((c,i) => {
          return (
            <section key={i} className="flex flex-col md:flex-row py-12 px-4 w-full">
              <div className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: `url(${c.image})`}}/>
              <div className="md:mx-4 md:border-t border-b border-black md:w-2/3 py-8 md:pt-40 flex flex-col md:flex-row flex-wrap items-start">
                <div className="md:w-1/2 md:pr-4">
                  <h2 className="font-display-serif text-3xl md:text-5xl mb-4">{c.title}</h2>
                  <p className="font-display-sans text-3xl mb-4">{c.price}</p>
                  <p className="mb-8">{c.description}</p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-heading uppercase text-lg mb-4 md:mt-20">Includes</h4>
                  <ul className="mb-8 md:mb-0">
                    {c.features.map((f,i) => {
                      return <li key={i} className="mb-0">{f}</li>
                    })}
                  </ul>
                </div>
                <BtnPrimary to={c.cta} external>Set up a Consultation</BtnPrimary>
              </div>
            </section>
          )
        })}
        <span className="bg-black h-px w-full block"/>
        <CtaBanner external to="https://calendly.com/hello-farrah/elopements">I am based in Atlanta but am happy to pack my suitcase and travel to your city!</CtaBanner>
        <section className="text-center bg-tan py-24 px-4">
          <h2 className="font-heading uppercase text-xl mb-4">What’s next?</h2>
          <h3 className="font-display-serif text-3xl md:text-5xl mb-4">Set Up a Consultation</h3>
          <p className="max-w-sm mx-auto mb-8">I would love to find some time to talk about your elopement.</p>
          <BtnPrimary to="https://calendly.com/hello-farrah/elopements" external>Let’s do it</BtnPrimary>
        </section>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Collection" />
        <section className="bg-tan h-screen flex flex-col items-center justify-center">
          <h1 className="font-display-serif text-3xl md:text-5xl mb-8">Enter Using Password</h1>
          <input className="font-heading font-uppercase p-4 mb-8 border border-black rounded-lg" type="text" onChange={(e) => setVal(e.target.value)}/>
          <button 
            className="border border-black rounded-lg px-8 py-2 font-heading uppercase"
            onClick={() => {
              if (val === 'forever' || val === 'Forever') {
                setAccess(true)
              }
            }}
          >Submit</button>
        </section>
      </Layout>
    )
  }
}
