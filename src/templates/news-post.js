import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import './styles.css'

import NavBar from '../components/navbar'
import Footer from '../components/footer'

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
  max-height: 55vh;
  object-fit:  cover;
  margin: 0 auto;
  padding-bottom: 25px;
`

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data
  const createHTML = () => { return {__html: post.html} }
  return(
    <div>
      <NavBar/>
      <Container>
        <Heading>{post.frontmatter.title}</Heading>
        <Description>{post.frontmatter.description}</Description>
        <Image src={post.frontmatter.image}></Image>
        <div dangerouslySetInnerHTML={createHTML()}/>
      </Container>
      <Footer/>
    </div>
  )
}

export default NewsPost

export const pageQuery = graphql`
  query NewsPostByID($id: String!){
    markdownRemark(id: {eq: $id}){
      id
      html
      frontmatter{
        title
        image
        date(formatString: "MMMM Do, YYYY")
        description
      }
    }
  }
`
