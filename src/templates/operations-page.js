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
        germanImage={frontmatter.germany.image}
        germanText={frontmatter.germany.imageText}
        germanOps={frontmatter.germany.germanOps}
        polandImage={frontmatter.poland.image}
        polandText={frontmatter.poland.imageText}
        polishOps={frontmatter.poland.polishOps}
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
        headingImage
        germany {
          germanOps
          imageText
          image
        }
        poland {
          polishOps
          imageText
          image
        }
      }
      html
    }
  }
`
