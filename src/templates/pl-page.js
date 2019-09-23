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
  padding: 3rem;
  @media only screen and (max-width: 56.25em){
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  
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
        titleOne={frontmatter.aboutTitle}
        bodyOne={data.markdownRemark.html}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Map>
        <Content>{frontmatter.mapBody}</Content>
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
        aboutTitle
        picOne
        picTwo
        picThree
        mapBody
      }
      html
    }
  }
`
