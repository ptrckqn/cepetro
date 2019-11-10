import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Highlights from "../components/highlights"
import Features from "../components/features"

const AboutPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        headingImage,
        heading,
        picOne,
        picTwo,
        picThree,
        features,
      },
      internal,
    },
  },
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage}>
      <SEO title="About Us" />
      <Highlights
        heading={heading}
        titleOne={title}
        bodyOne={internal.content}
        showButton={false}
        picOne={picOne}
        picTwo={picTwo}
        picThree={picThree}
      />
      <Features data={features} />
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
        features {
          title
          body
        }
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
