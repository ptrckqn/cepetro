import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"

const ResponsibilityPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, highlights },
    },
  },
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage}>
      <SEO title="Responsibility" />
      <Highlights data={highlights} />
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
        headingImage {
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
