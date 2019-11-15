import React from "react"
import { graphql } from "gatsby"
import queryString from "query-string"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import Showcase from "../components/showcase"

export const OperationsPageTemplate = ({ title, hero, location, showcase }) => (
  <Layout headingTitle={title} hero={hero}>
    <SEO title="Operations" />
    <Showcase
      location={
        location && location.search ? queryString.parse(location.search) : null
      }
      data={showcase}
    />
  </Layout>
)

const OperationsPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, showcase },
    },
  },
  location,
}) => (
  <OperationsPageTemplate
    title={title}
    hero={hero}
    showcase={showcase}
    location={location}
  />
)

export default OperationsPage

export const pageQuery = graphql`
  query operationsQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "operations-page" } }) {
      frontmatter {
        title
        hero {
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
