import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmbeddedForm from "../components/embedded-form"

export default function GeneralContactForm() {

  return (
    <Layout title="Contact">
      <SEO title="Contact Farrah" />
      <EmbeddedForm taveId="TaveContactForm" taveUrl="https://tave.com/farrah-power-inline/contact/9432a0?tpl=20200217&resizer=4.2.1"/>
    </Layout>
  )
}
