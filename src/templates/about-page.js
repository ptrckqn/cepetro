import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Splash from '../components/splash'

const Container = styled.div`
  @media screen and (max-width: 767px){
    padding: 30px 50px 0px;
  }
  @media screen and (min-width: 768px){
    padding: 75px 75px 0px;
  }
  font-weight: 300;
`

const AboutPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query aboutQuery{
          markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}){
            frontmatter{
              title
              image
            }
            html
          }
        }
      `}
      render={ data => {
        const { frontmatter } = data.markdownRemark
        const createHTML = () => { return {__html: data.markdownRemark.html} }
        return(
          <div>
            <Splash full={false} image={frontmatter.image} title={frontmatter.title}/>
            <Container>
              <div dangerouslySetInnerHTML={createHTML()}/>
            </Container>
          </div>
        )
      }}
    />
  )
}

export default AboutPage
