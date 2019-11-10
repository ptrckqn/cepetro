import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Cards from "../components/cards"

const NewsPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage },
    },
  },
}) => (
  <Layout headingTitle={title} headingImage={headingImage}>
    <SEO title={title} />
    <Cards data={{ title: null }} />
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query newsQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        title
        headingImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
