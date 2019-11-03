import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import Story from "../components/story"
import ContactCards from "../components/contactCards"

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout
      headingTitle={frontmatter.title}
      headingImage={frontmatter.headingImage}
    >
      <SEO title="Contact Us" />
      <Story
        heading={frontmatter.heading}
        title={frontmatter.titleEn}
        pic={frontmatter.picEn}
        contact={frontmatter.contactEn}
      />
      <ContactCards
        titleDe={frontmatter.titleDe}
        contactDe={frontmatter.contactDe}
        titlePl={frontmatter.titlePl}
        contactPl={frontmatter.contactPl}
        titleNl={frontmatter.titleNl}
        contactNl={frontmatter.contactNl}
      />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query contactQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
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
        picEn {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        titleEn
        contactEn
        titleDe
        contactDe
        titleNl
        contactNl
        titlePl
        contactPl
      }
    }
  }
`
