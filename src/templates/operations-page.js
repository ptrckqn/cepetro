import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import queryString from 'query-string'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import Showcase from '../components/showcase'

const OperationsPage = (props) => {
    const { frontmatter } = props.data.markdownRemark
    return(
        <Layout headingImage={frontmatter.headingImage}>
          <SEO title='Operations'/>
          <Showcase
            location={props.location.search ? queryString.parse(props.location.search) : null}
            germanOps={frontmatter.germanOps}
            polishOps={frontmatter.polishOps}
            default={props.data.markdownRemark.html}
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
