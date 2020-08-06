import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import BtnPrimary from "../components/BtnPrimary"
import CtaBanner from "../components/CtaBanner"

export default function AlbumPage() {
  const steps = [
    {
      title: "Customization",
      description:
        "You will pick out colors, fonts, etc. through the form below to start your album making process.",
    },
    {
      title: "Pick Favorites",
      description:
        "Browse your online gallery and favorite 50-70 images using the heart shaped icon on the top of the image.",
    },
    {
      title: "First Draft",
      description:
        "I will design the first draft using your favorited images and send it to you via email.",
    },
    {
      title: "Editing Process",
      description:
        "You will have up to three rounds of iterations  to edit the album until its just how you like it.",
    },
    {
      title: "Enjoy your Album!",
      description:
        "Your beautifully designed album will arrive at your doorstep no later than five weeks after being submitted to the lab.",
    },
  ]
  const collections = [
    {
      image:
        "https://res.cloudinary.com/ds9ng4srx/image/upload/v1596675244/Farrah/standard_bnrc2u.png",
      title: "Standard Album",
      description:
        "The standard album is printed on archival paper and is a wonderful coffee table book",
      price: "$900",
      features: [
        "10x10",
        "30 spreads ($25 per additional spread)",
        "Debossing of your names",
        "Seamless Binding",
      ],
      cta:
        "https://tave.com/farrah-power/questionnaire/d03423f0e9dba6a01d3e2ebb",
    },
    {
      image:
        "https://res.cloudinary.com/ds9ng4srx/image/upload/v1596675242/Farrah/fineart_bgyxvp.png",
      title: "Fine Art Album",
      description:
        "The fine art album is printed on museum quality, fine art paper and is made with the very best materials to last for generations",
      price: "$1,200",
      features: [
        "10x10",
        "30 spreads ($30 per additional spread)",
        "Debossing of your names",
        "Seamless Binding",
      ],
      cta:
        "https://tave.com/farrah-power/questionnaire/dd3f9b69bf3ca01dd91be733",
    },
  ]

  return (
    <Layout>
      <SEO title="Albums" />
      <Hero
        title={`Albums`}
        image="https://res.cloudinary.com/ds9ng4srx/image/upload/v1596675484/Farrah/album_fafza2.png"
      />
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 w-full">
        <h2 className="font-heading uppercase text-xl mb-4">Heirloom Albums</h2>
        <h3 className="font-display-serif text-3xl md:text-5xl mb-4">
          The process from beginning to the final product
        </h3>
        <p className="max-w-lg mx-auto mb-32">
          Each album is designed to uniquely tell each wedding day story. I
          design the book with you. I want you to have control over the colors,
          materials, and photo selections to create something truly special.
          There is nothing like seeing the images come to life on paper to
          relive the day and share with others.
        </p>
        <ul className="max-w-xl md:text-left">
          {steps.map((s, i) => {
            return (
              <li key={i} className="grid md:grid-cols-2 mb-12">
                <h2 className="text-6xl">Step {i + 1}</h2>
                <div>
                  <h3 className="text-4xl">{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
      {collections.map((c, i) => {
        return (
          <section
            key={i}
            className="flex flex-col md:flex-row py-12 px-4 w-full"
          >
            <div
              className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <div className="md:mx-4 md:border-t border-b border-black md:w-2/3 py-8 md:pt-40 flex flex-col md:flex-row flex-wrap items-start">
              <div className="md:w-1/2 md:pr-4">
                <h2 className="font-display-serif text-3xl md:text-5xl mb-4">
                  {c.title}
                </h2>
                <p className="font-display-sans text-3xl mb-4">{c.price}</p>
                <p className="mb-8">{c.description}</p>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-heading uppercase text-lg mb-4 md:mt-20">
                  Includes
                </h4>
                <ul className="mb-8 md:mb-0">
                  {c.features.map((f, i) => {
                    return (
                      <li key={i} className="mb-0">
                        {f}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <BtnPrimary to={c.cta} external>
                Start creating your album
              </BtnPrimary>
            </div>
          </section>
        )
      })}
      <span className="bg-black h-px w-full block" />
      <section className="text-center bg-tan py-24 px-4">
        <h2 className="font-heading uppercase text-xl mb-4">What’s next?</h2>
        <h3 className="font-display-serif text-3xl md:text-5xl mb-4">
          Start Creating Your Album
        </h3>
        <p className="max-w-sm mx-auto mb-8">
          Click the link above to start the process and let's create something
          that you will love and enjoy for years to come!
        </p>
      </section>
    </Layout>
  )
}
