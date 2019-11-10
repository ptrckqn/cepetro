import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO.js"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import SideMap from "../components/sideMap"
import Cards from "../components/cards"

const PlPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, highlights, map, news },
    },
  },
}) => (
  <Layout headingTitle={title} headingImage={headingImage} noNav>
    <SEO title="Central European Petroleum Ltd SP Zoo" />
    <Highlights data={highlights} />
    <SideMap data={map} />
    <Cards data={news} category="Poland" />
  </Layout>
)

export default PlPage

export const pageQuery = graphql`
  query PlQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "pl-page" } }) {
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
        news {
          title
        }
      }
    }
  }
`
