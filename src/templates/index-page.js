import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import LocationsButton from "../components/locationsButton"
import Highlights from "../components/highlights"
import Map from "../components/map"
import Cards from "../components/cards"

const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title="Central European Petroleum" />
      <LocationsButton
        germanyTitle={frontmatter.germanySite.title}
        germanyBody={frontmatter.germanySite.body}
        germanyImage={frontmatter.germanySite.image}
        polandTitle={frontmatter.polandSite.title}
        polandBody={frontmatter.polandSite.body}
        polandImage={frontmatter.polandSite.image}
      />
      <Highlights
        heading={frontmatter.aboutHeading}
        titleOne={frontmatter.about.title}
        bodyOne={frontmatter.about.body}
        titleTwo={frontmatter.work.title}
        bodyTwo={frontmatter.work.body}
        showButton
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Map heading={frontmatter.mapHeading} image={frontmatter.mapImage} />
      <Cards heading={frontmatter.newsHeading} short={true} />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query indexQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        picOne {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headingImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        picTwo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        picThree {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutHeading
        mapHeading
        mapImage
        newsHeading
        germanySite {
          title
          body
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        polandSite {
          title
          body
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        about {
          title
          body
        }
        work {
          title
          body
        }
      }
    }
  }
`
