import React from "react"
import { Link } from "gatsby"
import styled, { css, keyframes } from "styled-components"
import Logo from "./logo"
import BackgroundImage from "gatsby-background-image"

const moveInLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-10rem);
    }

    80%{
        transform: translateX(1rem);
    }

    100%{
        opacity: 1;
        transform: translate(0);
    }
`

const Container = styled(BackgroundImage)`
  z-index: 90;
  position: relative;
  height: 70vh;
  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
`

const ContainerPreview = styled.section`
  z-index: 90;
  position: relative;
  height: 70vh;
  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
  background-image: ${props => props.image};
`

const LogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
  display: none;
  width: 17rem;
  @media only screen and (max-width: 43em) {
    display: block;
  }
`

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
`

const Primary = styled.h1`
  color: #fff;
  text-transform: uppercase;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  margin-bottom: 6rem;
`

const Main = styled.span`
  display: block;
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 1.5rem;
  animation: ${css`
    ${moveInLeft} 1s ease-out
  `};

  @media (max-width: 37.5em) {
    letter-spacing: 1rem;
    font-size: 7vw;
  }
`

const Hero = ({ image, title }) => {
  return (
    <Container fluid={image.childImageSharp.fluid} loading="eager">
      <LogoBox>
        <Link to="/">
          <Logo />
        </Link>
      </LogoBox>
      <TextBox>
        <Primary>
          <Main>{title}</Main>
        </Primary>
      </TextBox>
    </Container>
  )
}

export default Hero
