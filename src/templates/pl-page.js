import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/SEO.js"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Cards from "../components/cards"

const Map = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 114rem;
  margin: 0 auto;
`

const Content = styled.div`
  padding: 3rem;
`

const Poland = styled.img``

const PlPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
      noNav
    >
      <SEO title="Central European Petroleum Ltd SP Zoo" />
      <Highlights
        heading={frontmatter.aboutHeading}
        titleOne={frontmatter.title}
        bodyOne={data.markdownRemark.html}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Map>
        <Content>{frontmatter.mapText}</Content>
        <Poland src="images/uploads/poland.png" />
      </Map>
      <Cards category="Poland" />
    </Layout>
  )
}

export default PlPage

export const pageQuery = graphql`
  query PlQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "pl-page" } }) {
      frontmatter {
        title
        headingImage
        picOne
        picTwo
        picThree
        mapText
      }
      html
    }
  }
`
