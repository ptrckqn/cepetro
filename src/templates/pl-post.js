import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import SideMap from "../components/sideMap"
import Features from "../components/features"

export const PlPostTemplate = ({ title, hero, map, features }) => (
  <Layout headingTitle={title} hero={hero} noNav>
    <SEO title="About Us" />
    <SideMap data={map} />
    <Features data={features} />
  </Layout>
)

const PlPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, map, features },
    },
  },
}) => <PlPostTemplate title={title} hero={hero} map={map} features={features} />

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
        map {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          body
        }
        features {
          title
          body
        }
      }
    }
  }
`
