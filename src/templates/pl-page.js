import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO.js"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import SideMap from "../components/sideMap"
import Cards from "../components/cards"

export const PlPageTemplate = ({ title, hero, highlights, map, news }) => (
  <Layout headingTitle={title} hero={hero} noNav>
    <SEO title="Central European Petroleum Ltd SP Zoo" />
    <Highlights data={highlights} />
    <SideMap data={map} />
    <Cards data={news} category="Poland" />
  </Layout>
)
const PlPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, highlights, map, news },
    },
  },
}) => (
  <PlPageTemplate
    title={title}
    hero={hero}
    highlights={highlights}
    map={map}
    news={news}
  />
)

export default PlPage

export const pageQuery = graphql`
  query PlQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "pl-page" } }) {
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
