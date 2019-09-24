import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/SEO"
import Layout from "../components/layout"

const Container = styled.section`
  padding: 20rem 3rem;
  margin-top: -20vh;
  text-align: center;
  background-color: #f7f7f7;
  @media (max-width: 56.25em) {
    padding: 3rem;
    padding-top: 20rem;
  }
`

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Secondary = styled.h2`
  display: inline-block;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    rgb(64, 162, 255),
    rgb(41, 108, 171)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @media (max-width: 56.25em) {
    font-size: 3rem;
  }
  @media (max-width: 37.5em) {
    font-size: 2.25em;
  }
`

const Tertiary = styled.h3`
    font-size; 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
`

const Image = styled.img`
  max-height: 50rem;
  max-width: 100%;
  margin: 0 auto;
  object-fit: contain;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15);
  margin: 3rem 0;
`

const Content = styled.div`
  font-weight: 300;
  text-align: left;
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  hr {
    margin: 1rem 3rem;
  }
  h1,
  h2,
  p {
    padding: 0.5rem 0;
  }
  a {
    color: #ff4a53;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  blockquote {
    border-left: 1px solid #777;
    padding-left: 2rem;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  ul,
  ol {
    padding-left: 2rem;
  }
`

const NewsPost = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const createHTML = () => {
    return { __html: data.markdownRemark.html }
  }
  return (
    <Layout headingTitle="News" headingImage={frontmatter.headingImage}>
      <SEO title={frontmatter.title} />
      <Container>
        <HeadingBox>
          <Secondary>{frontmatter.title}</Secondary>
        </HeadingBox>
        <Tertiary>{frontmatter.description}</Tertiary>
        <Tertiary>{frontmatter.date}</Tertiary>
        <Image src={frontmatter.image} />
        <Content dangerouslySetInnerHTML={createHTML()} />
      </Container>
    </Layout>
  )
}

export default NewsPost

export const pageQuery = graphql`
  query NewsPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        headingImage
        title
        category
        image
        date(formatString: "MMMM Do, YYYY")
        description
      }
    }
  }
`
