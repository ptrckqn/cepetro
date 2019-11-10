import React from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"
import Img from "gatsby-image"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: max-content 1fr;
  margin: 5rem auto;
  padding: 3rem;
  @media only screen and (max-width: 43em) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
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

const Image = styled(Img)`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
`

const SideMap = ({ data: { title, body, image } }) => {
  const toHtml = toHtml => {
    const parsedData = remark()
      .use(remarkHtml)
      .processSync(toHtml)
      .toString()
    return { __html: parsedData }
  }
  return (
    <Container>
      <HeadingBox>
        <Secondary>{title}</Secondary>
      </HeadingBox>
      <Content dangerouslySetInnerHTML={toHtml(body)} />
      <Image fluid={image.childImageSharp.fluid} />
    </Container>
  )
}

export default SideMap
