import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO.js"
import Layout from "../components/layout"
import PolandBody from "../components/polandBody"

const PlPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title="Central European Petroleum Ltd SP Zoo" />
      <PolandBody title={frontmatter.title} body={data.markdownRemark.html} />
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
      }
      html
    }
  }
`
