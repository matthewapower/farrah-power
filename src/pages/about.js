import React from "react"
import styled from "@emotion/styled"
import tw from 'tailwind.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BtnPrimary from "../components/BtnPrimary"

import moodboard from "../../content/assets/moodboard.png"

const TopBar = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  min-height: 300px;
  border-bottom: 1px solid black;

  h1 {
    font-size: 60px;
    font-weight: 500;
  }
`

const ImageFeature = styled.div`
  width: 100%;
  min-height: 80vh;
  background-image: url(${moodboard});
  background-size: cover;
  background-position: center center;
  ${tw`border-b border-black`}
`

export default function AboutPage() {
  const sliderImages = [
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508209/Farrah/slider-1_wcdg7q.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-3_nkk1pi.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-4_ctmw3j.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508211/Farrah/Slider-2_lgqomj.png'
  ]
  return (
    <Layout>
      <SEO title="About" />
      <TopBar>
        <h1>About Farrah</h1>
      </TopBar>
      <ImageFeature />
      <section className="border-b border-black py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display-serif leading-relaxed md:leading-loose text-3xl md:text-5xl">At this moment I am probably...</h2>
          <h3 className="font-display-sans leading-relaxed md:leading-loose text-3xl md:text-5xl">Planning next travels, reacting to food, or meticulously tracking incremental changes in nature</h3>
        </div>
      </section>
      <section className="flex flex-col md:flex-row border-b border-black">
        <div className="bg-tan h-48 md:min-h-screen w-full md:w-1/3 border-black border-b md:border-b-0" />
        <div className="w-full md:w-2/3 p-10 md:border-l border-black flex flex-col justify-end">
          <div className="max-w-xl">
            <h2 className="font-display-serif text-5xl mb-4">But Really...</h2>
            <h3 className="font-heading text-lg uppercase mb-4">A little more About me</h3>
            <p className="mb-8">For the past five years I have been photographing weddings and elopments. I have found my niche in documentary style wedding photography because of the way it produces meaningful and honest imagery that gets better over time. I live in Atlanta, GA with my husband Matt but continue to fall in love with the cities our travels bring us to.</p>
            <h3 className="font-heading text-lg uppercase mb-4">A little more About My Approach</h3>
            <p className="mb-4">
              The core of it is:
              <ul className="list-disc ml-5">
                <li className="mb-0">To be present & cheer you on throughout the day</li>
                <li className="mb-0">To be a respectful observer anticipating the beauty all around</li>
                <li className="mb-0">To kindly approach the day focused on real moments all while seeking out light & interaction</li>
              </ul>
            </p>
            <p>In terms of aesthetics, my approach to your wedding day is mixing modern editorial taste with the rawness and honesty of the moment.</p>
          </div>
        </div>
      </section>
      <section className="border-b border-black flex flex-col md:flex-row items-center justify-between p-4 hidden md:flex">
        <h2 className="text-center md:text-left text-xl md:text-base font-body tracking-wide mb-4 md:mb-0 w-64 md:w-full">I am based in Atlanta but love to travel for clients</h2>
        <BtnPrimary to="/contact">Contact</BtnPrimary>
      </section>
      <section className="py-24 flex flex-col items-center">
        <h2 className="font-display-sans text-center text-3xl md:text-5xl mb-8">Think we would work well together?</h2>
        <BtnPrimary to="/contact">Contact Me</BtnPrimary>
        <div className="flex mt-12 justofy-between w-screen overflow-hidden">
          {sliderImages.map((s,i) => {
            return (
              <div key={i} style={{backgroundImage: `url(${s})`}} className="bg-cover bg-center h-40 md:h-64 w-1/2 md:w-1/4 mr-12 flex-shrink-0"/>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

