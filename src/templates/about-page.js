import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Features from "../components/features"

const AboutPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, highlights, features },
    },
  },
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage}>
      <SEO title="About Us" />
      <Highlights data={highlights} />
      <Features data={features} />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query aboutQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
        features {
          title
          body
        }
      }
    }
  }
`
