import React from "react"
import { graphql } from "gatsby"
import queryString from "query-string"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Showcase from "../components/showcase"

const OperationsPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, showcase },
    },
  },
  location,
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage}>
      <SEO title="Operations" />
      <Showcase
        location={location.search ? queryString.parse(location.search) : null}
        data={showcase}
      />
    </Layout>
  )
}

export default OperationsPage

export const pageQuery = graphql`
  query operationsQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "operations-page" } }) {
      frontmatter {
        title
        headingImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        showcase {
          title
          main
          data {
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            body
          }
        }
      }
    }
  }
`
