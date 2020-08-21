import React from "react"
import { graphql } from "gatsby"
import items from "./faqs"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Dropdown from "../../components/dropdown"
import styled from "styled-components"

export default function FaqPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Thank You" />
      <section>
        <div className="container mx-auto py-20 px-4">
          <h1 className="font-display-serif text-3xl md:text-5xl mb-20 text-center">
            Frequently Asked Questions
          </h1>
          <div className="max-w-lg mx-auto">
            {items.map((it, i) => (
              <Dropdown question={it.question} answer={it.answer} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
