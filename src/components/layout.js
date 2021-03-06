import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Nav from "./nav"
import NavDesktop from "./navDesktop"
import Hero from "./hero"
import Footer from "./footer"

// Primary Blue: #3078bc rgb(48, 120, 188)
// Primary Blue Light: ##40a2ff rgb(64, 162, 255)
// Primary Blue Dark: #296cab rgb(41, 108, 171)

// Primary Red: #ff4a53 rgb(255, 74, 83)
// Primary Red Light: #ff3d47 rgb(255, 61, 71)
// Primary Red Dark: #ba2d34 rgb(186, 45, 52)
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
        color: #777;
        background-color: #f7f7f7;
        font-size: 1.6rem;
        padding: 3rem;
        box-sizing: border-box;
        @media (max-width: 56.25em){
            padding: 0;
        }
    }
`

const Container = styled.div`
  position: relative;
`

const Layout = ({ noNav, hero, headingTitle, children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Nav noNav={noNav} />
      <NavDesktop noNav={noNav} />
      <Hero title={headingTitle} image={hero} />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
