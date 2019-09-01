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
    <Layout headingImage={frontmatter.headingImage}>
      <SEO title="Central European Petroleum" />
      <LocationsButton />
      <Highlights
        heading={"Get to know us"}
        titleOne={frontmatter.about.title}
        bodyOne={frontmatter.about.body}
        titleTwo={frontmatter.work.title}
        bodyTwo={frontmatter.work.body}
        showButton={true}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Map heading={"Where you can find us"} />
      <Cards short={true} />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query pageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        picOne
        headingImage
        picTwo
        picThree
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
