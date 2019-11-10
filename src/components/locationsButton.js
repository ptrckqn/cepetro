import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

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

const CountryContainer = styled(BackgroundImage)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s;
  cursor: pointer;
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

const LocationsButton = ({ data }) => {
  return (
    <Container>
      {data &&
        data.map(({ title, image, body, url }, count) => (
          <CountryContainer fluid={image.childImageSharp.fluid} key={count}>
            <Background />
            {url.includes("https") || url.includes("http") ? (
              <a href={url}>
                <Title>{title}</Title>
                <Details>
                  <Text>{body}</Text>
                </Details>
              </a>
            ) : (
              <Link to={url}>
                <Title>{title}</Title>
                <Details>
                  <Text>{body}</Text>
                </Details>
              </Link>
            )}
          </CountryContainer>
        ))}
    </Container>
  )
}

export default LocationsButton
