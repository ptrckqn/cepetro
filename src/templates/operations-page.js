import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Showcase from '../components/showcase'

const OperationsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return(
        <Layout headingImage={frontmatter.headingImage}>
            <Helmet title='CEPetro - Operations'/>
            <Showcase
            />
        </Layout>
    )
}

export default OperationsPage

export const pageQuery = graphql`
    query operationsQuery{
        markdownRemark(frontmatter: {templateKey: {eq: "operations-page"}}){
            frontmatter{
                headingImage
                germanyOps
                polishOps
            }
            html
        }
    }
`