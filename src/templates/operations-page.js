import React from "react"
import { graphql } from "gatsby"
import queryString from "query-string"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Showcase from "../components/showcase"

const OperationsPage = props => {
  const { frontmatter } = props.data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title="Operations" />
      <Showcase
        location={
          props.location.search
            ? queryString.parse(props.location.search)
            : null
        }
        heading={frontmatter.heading}
        germanyImage={frontmatter.germany.image}
        germanyText={frontmatter.germany.text}
        germanyOps={frontmatter.germany.ops}
        polandImage={frontmatter.poland.image}
        polandText={frontmatter.poland.text}
        polandOps={frontmatter.poland.ops}
        default={props.data.markdownRemark.html}
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
        heading
        headingImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        germany {
          ops
          text
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        poland {
          ops
          text
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      html
    }
  }
`
