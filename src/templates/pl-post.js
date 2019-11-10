import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import SideMap from "../components/sideMap"
import Features from "../components/features"

const PlPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, map, features },
    },
  },
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage} noNav>
      <SEO title="About Us" />
      <SideMap data={map} />
      <Features data={features} />
    </Layout>
  )
}

export default PlPost

export const pageQuery = graphql`
  query PlPostQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "pl-post" } }) {
      frontmatter {
        title
        headingImage {
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
