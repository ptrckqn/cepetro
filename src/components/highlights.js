import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import remark from "remark"
import remarkHtml from "remark-html"

const Container = styled.section`
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content 1fr;
  padding: 10rem 0;
  @media only screen and (max-width: 43em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content repeat(2, 1fr);
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

const Section = styled.div`
  padding: 3rem;
`

const Tertiary = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`

const Btn = styled(Link)`
  &:link,
  &:visited {
    font-size: 1.6rem;
    color: #3078bc;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #3078bc;
    padding: 3px;
    transition: all 0.2s;
  }
  &:hover {
    background-color: #3078bc;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`

const Composition = styled.div`
  position: relative;
  height: 100%;
`

const Wrapper = styled.div`
  width: 55%;
  max-width: 35rem;
  position: absolute;
  z-index: 9;
  transition: all 0.3s;
  transform: translate(-50%, -50%);
  &:hover {
    transform: scale(1.05) translate(-50%, -50%);
    z-index: 10;
  }
  ${Composition}:hover &:not(:hover) {
    transform: scale(0.95) translate(-50%, -50%);
  }
  :nth-child(1) {
    left: 40%;
    top: 35%;
  }
  :nth-child(2) {
    left: 60%;
    top: 50%;
  }
  :nth-child(3) {
    left: 30%;
    top: 60%;
  }
`
const Photo = styled(Img)`
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 3px;
`

const Content = styled.div`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  font-weight: 300;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
  }
  h2 {
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

const Highlights = ({ showButton, data: { title, images, data } }) => {
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
      <Section>
        {data &&
          data.map(({ title, body }, count) => (
            <>
              <Tertiary>{title}</Tertiary>
              <Content dangerouslySetInnerHTML={toHtml(body)} />
            </>
          ))}
        {showButton ? <Btn to="/about">Learn More &rarr;</Btn> : null}
      </Section>
      <Section>
        <Composition>
          {images &&
            images.map((image, count) => (
              <Wrapper>
                <Photo
                  fluid={image.childImageSharp.fluid}
                  alt={`Photo ${count}`}
                />
              </Wrapper>
            ))}
        </Composition>
      </Section>
    </Container>
  )
}

export default Highlights
