import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
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

const Image = styled(Img)`
  max-height: 50rem;
  max-width: 100%;
  margin: 0 auto;
  object-fit: contain;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15);
  margin: 3rem 0;
`

const ImagePreview = styled.img`
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

export const NewsPostTemplate = ({
  title,
  hero,
  description,
  date,
  image,
  html,
  id,
}) => {
  const toHtml = toHtml => {
    return { __html: toHtml }
  }
  return (
    <Layout headingTitle="News" hero={hero}>
      <SEO title={title} />
      <Container>
        <HeadingBox>
          <Secondary>{title}</Secondary>
        </HeadingBox>
        <Tertiary>{description}</Tertiary>
        <Tertiary>{date}</Tertiary>
        {image && <Image fluid={image.childImageSharp.fluid} />}
        <Content dangerouslySetInnerHTML={toHtml(html)} />
      </Container>
    </Layout>
  )
}

const NewsPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, hero, description, date, image },
      html,
      id,
    },
  },
}) => (
  <NewsPostTemplate
    title={title}
    hero={hero}
    description={description}
    date={date}
    image={image}
    html={html}
    id={id}
  />
)

export default NewsPost

export const pageQuery = graphql`
  query NewsPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM Do, YYYY")
        description
      }
    }
  }
`
