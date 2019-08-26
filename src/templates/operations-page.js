import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import Showcase from '../components/showcase'

const OperationsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return(
        <Layout headingImage={frontmatter.headingImage}>
            <SEO title='Operations'/>
            <Showcase
                germanOps={frontmatter.germanOps}
                polishOps={frontmatter.polishOps}
                default={data.markdownRemark.html}
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
                germanOps
                polishOps
            }
            html
        }
    }
`