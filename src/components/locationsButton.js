import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  width: 95%;
  height: 25rem;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 25rem;
  @media only screen and (max-width: 43em) {
    height: 50rem;
    grid-template-columns: 1fr;
    grid-template-rows: 25rem 25rem;
  }
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

const CountryContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s;
  cursor: pointer;
  background-image: ${props => `url(${props.image})`};
`

const Title = styled.h3`
  position: absolute;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f7f7f7;
  text-transform: uppercase;
  font-size: 2rem;
  z-index: 3;
  transition: all 0.3s;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }
  ${CountryContainer}:hover & {
    top: 15%;
  }
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
  transition: all 0.3s;
  ${CountryContainer}:hover & {
    opacity: 0.6;
  }
`
const Details = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  color: #f7f7f7;
  transition: all 0.3s;
  opacity: 0;
  ${CountryContainer}:hover & {
    top: 55%;
    opacity: 1;
  }
`

const Text = styled.p``

const LocationsButton = ({
  germanyTitle,
  germanyBody,
  germanyImage,
  polandTitle,
  polandBody,
  polandImage,
}) => {
  return (
    <Container>
      <CountryContainer image={germanyImage}>
        <Background />
        <a href="https://www.cepetro.de/cepetroleum.html">
          <Title>{germanyTitle}</Title>
          <Details>
            <Text>{germanyBody}</Text>
          </Details>
        </a>
      </CountryContainer>

      <CountryContainer image={polandImage}>
        <Background />
        <Link to="/pl">
          <Title>{polandTitle}</Title>
          <Details>
            <Text>{polandBody}</Text>
          </Details>
        </Link>
      </CountryContainer>
    </Container>
  )
}

export default LocationsButton
