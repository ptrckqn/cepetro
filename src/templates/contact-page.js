import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import Story from "../components/story"
import ContactCards from "../components/contactCards"

export const ContactPageTemplate = ({ title, hero, main, secondary }) => (
  <Layout headingTitle={title} hero={hero}>
    <SEO title="Contact Us" />
    <Story data={main} />
    <ContactCards data={secondary} />
  </Layout>
)

const ContactPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, main, secondary },
    },
  },
}) => (
  <ContactPageTemplate
    title={title}
    hero={hero}
    main={main}
    secondary={secondary}
  />
)

export default ContactPage

export const pageQuery = graphql`
  query contactQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        hero {
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
