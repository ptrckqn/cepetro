import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background-color: #f7f7f7;
  padding: 25rem 0;
  margin-top: -20vh;
  overflow: hidden;
`

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 8rem;
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
  font-size: 1.6rem;
  margin-bottom: 3rem;
  font-weight: 300;
  padding: 3rem 5rem;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 5rem;
  }
  h2 {
    margin-top: 5rem;
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
    width: 100%;
    object-fit: contain;
    max-height: 70vh;
  }
  ul,
  ol {
    padding-left: 2rem;
  }
`

const PolandBody = props => {
  const createHtml = toHtml => {
    return { __html: toHtml }
  }
  return (
    <Container>
      <HeadingBox>
        <Secondary>{props.title}</Secondary>
      </HeadingBox>
      <Content dangerouslySetInnerHTML={createHtml(props.body)} />
    </Container>
  )
}

export default PolandBody
