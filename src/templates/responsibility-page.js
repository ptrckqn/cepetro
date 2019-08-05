import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './styles.css'

import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Splash from '../components/splash'

const Container = styled.div`
  @media screen and (max-width: 767px){
    padding: 100px 50px 0px;
  }
  @media screen and (min-width: 768px){
    padding:  125px 75px 0px;
  }
  font-weight: 300;
`

const ResponsibilityPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query responsibilityQuery{
          markdownRemark(frontmatter: {templateKey: {eq: "responsibility-page"}}){
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
            <NavBar/>
            <Splash full={false} image={frontmatter.image} title={frontmatter.title}/>
            <Container>
              <div dangerouslySetInnerHTML={createHTML()}/>
            </Container>
            <Footer/>
          </div>
        )
      }}
    />
  )
}

export default ResponsibilityPage
