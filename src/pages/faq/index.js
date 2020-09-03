import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Dropdown from "../../components/dropdown"
import styled from "styled-components"

export default function FaqPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="Frequently Asked Questions" />
      <section>
        <div className="container mx-auto py-20 px-4">
          <h1 className="font-display-serif text-3xl md:text-5xl mb-20 text-center">
            Frequently Asked Questions
          </h1>
          <div className="max-w-lg mx-auto">
            {props.data.contentfulSettings.faQs.map((it, i) => (
              <Dropdown
                question={it.question.question}
                answer={it.answer.childMarkdownRemark.html}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulSettings(id: { eq: "b8d8f736-cc45-55eb-bdf0-5fdeadcff30c" }) {
      faQs {
        question {
          question
        }
        answer {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
