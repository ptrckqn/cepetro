import React from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 43em) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
  }
`

const Box = styled.div`
  font-size: 1.5rem;
  padding: 2.5rem;
  border-radius: 3px;
  height: 100%;
  width: 50%;
  :nth-child(1) {
    background: rgba(255, 255, 255, 0.8);
  }
  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }
`

const Tertiary = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
`

const Content = styled.span`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  font-weight: 300;
  h1 {
    font-weight: 400;
    text-transform: uppercase;
  }
  h2 {
    font-weight: 300;
    text-transform: uppercase;
  }
  h1,
  h2,
  p {
    padding: 0.5rem 0;
  }
  hr {
    margin: 1rem 3rem;
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

const Features = ({ data }) => {
  const toHtml = toHtml => {
    const parsedData = remark()
      .use(remarkHtml)
      .processSync(toHtml)
      .toString()
    return { __html: parsedData }
  }
  return (
    <Container>
      {data.map(({ title, body }, count) => (
        <Box key={count}>
          <Tertiary>{title}</Tertiary>
          <Content dangerouslySetInnerHTML={toHtml(body)} />
        </Box>
      ))}
    </Container>
  )
}

export default Features
