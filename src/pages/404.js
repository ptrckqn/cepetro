import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700&display=swap&subset=latin-ext');
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;

        @media (max-width: 37.5em){
            font-size: 75%;
        }

        @media (max-width: 56.25em){
            font-size: 56.25%;
        }

        @media (max-width: 75em){
            font-size: 50%;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        font-size: 1.6rem;
padding: 0
        box-sizing: border-box;

    }
`

const Container = styled(BackgroundImage)`
  height: 100vh;
  width: 100vw;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Primary = styled.h1`
  color: #fff;
  text-transform: uppercase;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-size: 8rem;
  letter-spacing: 1.5rem;
  font-weight: 700;
`

const Main = styled.span`
  color: #fff;
  display: block;
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 3rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #010101;
  padding: 1.5rem;
  background-color: #fff;
`

const NotFoundPage = ({ data: { file } }) => (
  <>
    <GlobalStyle />
    <Container fluid={file.childImageSharp.fluid}>
      <Content>
        <Primary>404</Primary>
        <Main>Page not found.</Main>
        <StyledLink to="/">Go home</StyledLink>
      </Content>
    </Container>
  </>
)

export default NotFoundPage

export const pageQuery = graphql`
  query notFoundQuery {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
