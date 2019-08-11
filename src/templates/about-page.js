import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Highlights from '../components/highlights'
import Features from '../components/features'

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return(
        <Layout>
            <Helmet title='CEPetro - About'/>
            <Highlights
                heading={'Who we are'}
                titleOne={frontmatter.title}
                bodyOne={data.markdownRemark.internal.content}
                showButton={false}
                picOne={frontmatter.picOne}
                picTwo={frontmatter.picTwo}
                picThree={frontmatter.picThree}
            />
            <Features 
                titleOne={'CEP Management'}
                bodyOne={frontmatter.management}
                titleTwo={'CEP Board of Directors'}
                bodyTwo={frontmatter.boardOfDirectors}
            />
        </Layout>
    )
}

export default AboutPage

export const pageQuery = graphql`
    query aboutQuery{
        markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}){
            frontmatter{
                title
                image
                management
                boardOfDirectors
                picOne
                picTwo
                picThree
            }
            internal{
                content
            }
        }
    }
`