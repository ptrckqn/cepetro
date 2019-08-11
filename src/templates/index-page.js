import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Highlights from '../components/highlights'
import Cards from '../components/cards'


export const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return(
    <Layout>
      <Highlights
        heading={'Get to know us'}
        titleOne={frontmatter.about.title}
        bodyOne={frontmatter.about.body}
        titleTwo={frontmatter.work.title}
        bodyTwo={frontmatter.work.body}
        showButton={true}
        picOne={frontmatter.picOne}
        picTwo={frontmatter.picTwo}
        picThree={frontmatter.picThree}
      />
      <Cards short={true} />
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query pageQuery{
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}){
      frontmatter{
        picOne
        picTwo
        picThree
        about{
          title
          body
        }
        work{
          title
          body
        }
      }
    }
  }
`