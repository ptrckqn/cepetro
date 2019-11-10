import React, { Component } from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  flex-wrap: wrap;
  @media only screen and (max-width: 43em) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
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

const Row = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  &:not(:last-child) {
    margin-bottom: 8rem;
    @media (max-width: 56.25em) {
      margin-bottom: 6rem;
    }
  }
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  @media (max-width: 56.25em) {
    max-width: 70rem;
  }
`

const Box = styled.div`
  font-size: 1.5rem;
  padding: 2.5rem;
  border-radius: 3px;
  background-color: ${props =>
    props.even ? "transparent" : "rgba(255, 255, 255, 0.8)"};
  height: 100%;
  width: 50%;
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
    let parsedData = remark()
      .use(remarkHtml)
      .processSync(toHtml)
      .toString()
    return { __html: parsedData }
  }
  return (
    <Container>
      {data.map(({ title, body }, count) => (
        <Box key={count} even={(count + 1) % 2 === 0}>
          <Tertiary>{title}</Tertiary>
          <Content dangerouslySetInnerHTML={toHtml(body)} />
        </Box>
      ))}
    </Container>
  )
}

export default Features
