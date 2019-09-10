import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"

const ResponsibilityPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title="Responsibility" />
      <Highlights
        heading={frontmatter.heading}
        titleOne={frontmatter.title}
        bodyOne={data.markdownRemark.internal.content}
        showButton={false}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
    </Layout>
  )
}

export default ResponsibilityPage

export const pageQuery = graphql`
  query responsibilityQuery {
    markdownRemark(
      frontmatter: { templateKey: { eq: "responsibility-page" } }
    ) {
      frontmatter {
        title
        heading
        headingImage
        picOne
        picTwo
        picThree
      }
      internal {
        content
      }
    }
  }
`
