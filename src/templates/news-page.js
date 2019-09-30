import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Cards from "../components/cards"

const NewsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title={frontmatter.title} />
      <Cards />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query newsQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        title
        headingImage
      }
    }
  }
`
