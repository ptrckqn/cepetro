import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Features from "../components/features"

export const AboutPageTemplate = ({ title, hero, highlights, features }) => (
  <Layout headingTitle={title} hero={hero}>
    <SEO title="About Us" />
    <Highlights data={highlights} />
    <Features data={features} />
  </Layout>
)

const AboutPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, highlights, features },
    },
  },
}) => (
  <AboutPageTemplate
    title={title}
    hero={hero}
    highlights={highlights}
    features={features}
  />
)

export default AboutPage

export const pageQuery = graphql`
  query aboutQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
        features {
          title
          body
        }
      }
    }
  }
`
