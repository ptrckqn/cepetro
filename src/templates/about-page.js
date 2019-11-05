import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Features from "../components/features"

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title="About Us" />
      <Highlights
        heading={frontmatter.heading}
        titleOne={frontmatter.title}
        bodyOne={data.markdownRemark.internal.content}
        showButton={false}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Features
        titleOne={"CEP Management"}
        bodyOne={frontmatter.management}
        titleTwo={"CEP Board of Directors"}
        bodyTwo={frontmatter.boardOfDirectors}
      />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query aboutQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        management
        boardOfDirectors
        picOne {
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
      }
      internal {
        content
      }
    }
  }
`
