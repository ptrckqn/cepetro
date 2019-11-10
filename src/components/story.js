import React, { Component } from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"
import Img from "gatsby-image"

const Container = styled.section`
  padding: 10rem 0;
  position: relative;
  background-color: #f7f7f7;
`

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
`

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
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
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);
  @media (max-width: 56.25em) {
    transform: skewX(0);
    padding: 3rem;
  }
`

const Shape = styled.figure`
  width: 18rem;
  height: 18rem;
  float: left;
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;
  @media (max-width: 56.25em) {
    float: none;
    margin: 0 auto;
    transform: skewX(0deg);
  }
`

const Image = styled(Img)`
  height: 100%;
  transform: translateX(-4rem) scale(1.4);
  transition: all 0.5s;
`

const Caption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff;
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: skewX(12deg);
  @media (max-width: 56.25em) {
    transform: skewX(0);
  }
`

const Detail = styled.div``

const Tertiary = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;
  transform: skewX(12deg);
  @media (max-width: 56.25em) {
    transform: skewX(0);
  }
`

const List = styled.ul`
  padding: 3rem;
  font-size: 1.6rem;
  transform: skewX(12deg);
  list-style: none;
  @media (max-width: 56.25em) {
    transform: skewX(0);
    padding: 0;
  }
`

const Item = styled.ul`
  a {
    color: #ff4a53;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Story = ({ data: { title, name, image, data } }) => {
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
      <Row>
        <Box>
          <Shape>
            <Image fluid={image.childImageSharp.fluid} alt="Location" />
          </Shape>
          <Detail>
            <Tertiary>{name}</Tertiary>
            <List>
              {data &&
                data.map((item, count) => (
                  <Item key={count} dangerouslySetInnerHTML={toHtml(item)} />
                ))}
            </List>
          </Detail>
        </Box>
      </Row>
    </Container>
  )
}
export default Story
