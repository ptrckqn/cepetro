import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Features from '../components/features'

const OperationsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return(
        <Layout>
            <Features
                heading={'What we have accomplished'}
                titleOne={'Our Activities in Germany'}
                bodyOne={frontmatter.germanyOps}
                titleTwo={'Our Activities in Poland'}
                bodyTwo={frontmatter.polishOps}
            />
        </Layout>
    )
}

export default OperationsPage

export const pageQuery = graphql`
    query operationsQuery{
        markdownRemark(frontmatter: {templateKey: {eq: "operations-page"}}){
            frontmatter{
                germanyOps
                polishOps
            }
        }
    }
`