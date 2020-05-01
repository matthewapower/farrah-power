import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import BtnPrimary from "../components/BtnPrimary"
import HeadlineFeature from "../components/HeadlineFeature"
import CtaBanner from "../components/CtaBanner"

import moodboard from "../../content/assets/moodboard.png"

export default function AboutPage() {

  let sliderImages = [
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508209/Farrah/slider-1_wcdg7q.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-3_nkk1pi.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508210/Farrah/slider-4_ctmw3j.png',
    'https://res.cloudinary.com/ds9ng4srx/image/upload/v1585508211/Farrah/Slider-2_lgqomj.png'
  ]

  return (
    <Layout>
      <SEO title="About" />
      <Hero title="About Farrah" image={moodboard}/>
      <HeadlineFeature 
        heading="At this moment I am probably..." 
        subheading="Planning next travels, reacting to food, or meticulously tracking incremental changes in nature"
      />
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
            <p className="max-w-md">In terms of aesthetics, my approach to your wedding day is mixing modern editorial taste with the honesty of the moment.</p>
          </div>
        </div>
      </section>
      <CtaBanner>I am based in Atlanta but am happy to pack my suitcase and travel to your city!</CtaBanner>
      <section className="py-24 flex flex-col items-center">
        <h2 className="font-display-sans text-center text-3xl md:text-5xl mb-8">Think we would work well together?</h2>
        <BtnPrimary to="/contact">Contact Me</BtnPrimary>
        <div className="mt-12 w-screen flex">
          {sliderImages.map((s,i) => {
            return (
              <div key={i} style={{backgroundImage: `url(${s})`}} className={`bg-cover bg-center h-24 md:h-64 w-1/2 md:w-1/4 ${i === sliderImages.length - 1 ? 'mr-0' : 'mr-4 md:mr-12'}`}/>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

