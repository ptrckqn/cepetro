import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/SEO.js"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Cards from "../components/cards"

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
`

const Secondary = styled.h2`
  display: inline-block;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    rgb(64, 162, 255),
    rgb(41, 108, 171)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @media (max-width: 56.25em) {
    font-size: 3rem;
  }
  @media (max-width: 37.5em) {
    font-size: 2.25em;
  }
`

const PolandMap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content 1fr;
  margin: 25rem auto;
  padding: 3rem;
  @media only screen and (max-width: 43em) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`
const Content = styled.div``

const Poland = styled.img`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
`

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
        bodyOne={data.markdownRemark.html}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <PolandMap>
        <HeadingBox>
          <Secondary>{frontmatter.assetHeading}</Secondary>
        </HeadingBox>
        <Content>{frontmatter.mapBody}</Content>
        <Poland src="images/uploads/poland.png" />
      </PolandMap>
      <Cards heading={frontmatter.newsHeading} category="Poland" />
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
        aboutHeading
        assetHeading
        newsHeading
        picOne
        picTwo
        picThree
        mapBody
      }
      html
    }
  }
`
