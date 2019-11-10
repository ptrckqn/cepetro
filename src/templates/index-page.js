import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import LocationsButton from "../components/locationsButton"
import Highlights from "../components/highlights"
import Map from "../components/map"
import Cards from "../components/cards"

const LandingPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, locations, highlights, map, news },
    },
  },
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage}>
      <SEO title="Central European Petroleum" />
      <LocationsButton data={locations} />
      <Highlights data={highlights} showButton />
      <Map data={map} />
      <Cards data={news} short />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        headingImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        locations {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body
          url
        }
        highlights {
          title
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
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
        }
        news {
          title
        }
      }
    }
  }
`
