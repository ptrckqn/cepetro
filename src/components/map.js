import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.section`
  background-color: #f7f7f7;
  padding: 10rem 0;
  margin-top: -20vh;
  @media only screen and (max-width: 56.25em) {
    margin-bottom: 0vh;
    margin-top: 0vh;
  }
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

const MapBox = styled.div`
  background-image: url("images/uploads/basemap.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 56.25em) {
    height: 50vh;
  }
  @media only screen and (max-width: 37.5em) {
    background-size: 275%;
  }
`

const Country = styled.img`
  position: absolute;
  transition: all 0.3s;
  cursor: pointer;
  opacity: 0;
  &:hover {
    opacity: 1;
    transform: scale(1.5);
  }
`

const Germany = styled(Country)`
  width: 11%;
  left: 43%;
  top: 43%;
  @media only screen and (min-width: 75em) {
    top: 40%;
  }
  @media only screen and (max-width: 56.25em) {
    top: 40%;
  }
  @media only screen and (max-width: 37.5em) {
    top: 20%;
    left: 30%;
    width: 35%;
  }
`

const Poland = styled(Country)`
  width: 12%;
  left: 53%;
  top: 43%;
  @media only screen and (min-width: 75em) {
    top: 40%;
    max-width: 20rem;
  }
  @media only screen and (max-width: 56.25em) {
    top: 40%;
  }
  @media only screen and (max-width: 37.5em) {
    top: 25%;
    left: 55%;
    width: 35%;
  }
`

class Map extends Component {
  render() {
    return (
      <Container>
        <HeadingBox>
          <Secondary>{this.props.heading}</Secondary>
        </HeadingBox>
        <MapBox>
          <Link to="/operations">
            <Germany src="images/uploads/germany.png" />
          </Link>
          <Link to="/operations">
            <Poland src="images/uploads/poland.png" />
          </Link>
        </MapBox>
      </Container>
    )
  }
}

export default Map
