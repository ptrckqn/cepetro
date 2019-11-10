import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"

export const ResponsibilityPageTemplate = ({ title, hero, highlights }) => (
  <Layout headingTitle={title} hero={hero}>
    <SEO title="Responsibility" />
    <Highlights data={highlights} />
  </Layout>
)
const ResponsibilityPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, highlights },
    },
  },
}) => (
  <ResponsibilityPageTemplate
    title={title}
    hero={hero}
    highlights={highlights}
  />
)

export default ResponsibilityPage

export const pageQuery = graphql`
  query responsibilityQuery {
    markdownRemark(
      frontmatter: { templateKey: { eq: "responsibility-page" } }
    ) {
      frontmatter {
        title
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        highlights {
          title
          images {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          data {
            title
            body
          }
        }
      }
    }
  }
`
