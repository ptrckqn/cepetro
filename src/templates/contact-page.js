import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Story from "../components/story"
import ContactCards from "../components/contactCards"

const ContactPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, headingImage, main, secondary },
    },
  },
}) => {
  return (
    <Layout headingTitle={title} headingImage={headingImage}>
      <SEO title="Contact Us" />
      <Story data={main} />
      <ContactCards data={secondary} />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query contactQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        headingImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          title
          name
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          data
        }
        secondary {
          title
          data
        }
      }
    }
  }
`
