import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO.js"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Cards from "../components/cards"

const PlPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
      noNav
    >
      <SEO title="Central European Petroleum Ltd SP Zoo" />
      <Highlights
        heading={frontmatter.aboutHeading}
        titleOne={frontmatter.title}
        bodyOne={data.markdownRemark.body}
        showButton={true}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Cards category="Poland" />
    </Layout>
  )
}

export default PlPage

export const pageQuery = graphql`
  query PlQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "pl-page" } }) {
      frontmatter {
        title
        headingImage
        picOne
        picTwo
        picThree
      }
      html
    }
  }
`
