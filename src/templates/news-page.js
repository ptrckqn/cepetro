import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Cards from "../components/cards"

export const NewsPageTemplate = ({ title, hero }) => (
  <Layout headingTitle={title} hero={hero}>
    <SEO title={title} />
    <Cards data={{ title: null }} />
  </Layout>
)

const NewsPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero },
    },
  },
}) => <NewsPageTemplate title={title} hero={hero} />

export default NewsPage

export const pageQuery = graphql`
  query newsQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        title
        hero {
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
