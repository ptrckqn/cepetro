import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import Story from '../components/story'

const ContactPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return(
        <Layout headingImage={frontmatter.headingImage}>
            <SEO title='Contact Us'/>
            <Story 
                heading={frontmatter.title}
                titleOne={'Central European Petroleum Ltd.'}
                titleTwo={'CEP Central European Petroleum GmbH'}
                picEn={frontmatter.picEn}
                picDe={frontmatter.picDe}
                contactEn={frontmatter.contactEn}
                contactDe={frontmatter.contactDe}
            />
        </Layout>
    )
}

export default ContactPage

export const pageQuery = graphql`
    query contactQuery{
        markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}){
            frontmatter{
                title
                headingImage
                picEn
                picDe
                contactEn
                contactDe
            }
        }
    }
`