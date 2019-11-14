import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import BottomMap from "../components/bottomMap"
import Features from "../components/features"

export const PlPostTemplate = ({ title, hero, botmap, features }) => (
  <Layout headingTitle={title} hero={hero} noNav>
    <SEO title="About Us" />
    <BottomMap data={botmap} />
    <Features data={features} />
  </Layout>
)

const PlPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, botmap, features },
    },
  },
}) => (
  <PlPostTemplate
    title={title}
    hero={hero}
    botmap={botmap}
    features={features}
  />
)

export default PlPost

export const pageQuery = graphql`
  query PlPostQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "pl-post" } }) {
      frontmatter {
        title
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        botmap {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          body {
            entry
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
