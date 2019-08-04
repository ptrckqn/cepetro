import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Splash from '../components/splash'
import News from '../components/news'

const Container = styled.div`
  @media screen and (max-width: 767px){
    padding: 100px 50px 0px;
  }
  @media screen and (min-width: 768px){
    padding:  125px 50px 0px;
  }
  font-weight: 300;
`

const NewsPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query newsQuery{
          markdownRemark(frontmatter: {templateKey: {eq: "news-page"}}){
            frontmatter{
              title
              image
            }
          }
        }
      `}
      render={ data => {
        const { frontmatter } = data.markdownRemark
        return(
          <div>
            <Splash full={false} title={frontmatter.title} image={frontmatter.image}/>
            <Container>
              <News />
            </Container>
          </div>
        )
      }}
    />
  )
}

export default NewsPage
