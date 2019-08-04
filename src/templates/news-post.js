import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  @media screen and (max-width: 767px){
    padding: 100px 50px 0px;
  }
  @media screen and (min-width: 768px){
    padding: 125px 75px 0px;
  }
  font-weight: 300;
  line-height: 1.5;
`

const Heading = styled.h2`
  @media screen and (max-width: 767px){
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px){
    font-size: 2rem;
  }
  margin-bottom: 20px;
  text-align: left;
  font-weight: 600;
`

const Description = styled.h4`
  @media screen and (max-width: 767px){
    font-size: 1.2rem;
  }
  @media screen and (min-width: 768px){
    font-size: 1.3rem;
  }
  font-weight: 300;
`

const Image = styled.img`
  width: 100%;
  max-height: 75vh;
  object-fit:  cover;
  margin: 0 auto;
  padding-bottom: 25px;
`

const Content = styled.div`

`

const NewsPost = () => {
  return(
    <StaticQuery
      query={graphql`
        query NewsPostById($id: String!){
          markdownRemark(id: {eq: $id}){
            id
            html
            frontmatter{
              title
              image
              date(formatString: "MMMM Do, YYYY")
              description
            }
            html
          }
        }
      `}
      render={ data => {
          const { frontmatter } = data.markdownRemark
          const createHTML = () => { return {__html: data.markdownRemark.html} }
          return(
            <Container>
              <Heading>{frontmatter.title}</Heading>
              <Description>{frontmatter.description}</Description>
              <Image src={frontmatter.image}></Image>
              <Content dangerouslySetInnerHTML={createHTML()}/>
            </Container>
          )
        }
      }
    />
  )
}

export default NewsPost
