import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 95%;
  height: 25rem;
  margin: 3rem auto -5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
`
const GermanyContainer = styled(CountryContainer)`
  background-image: url("images/uploads/germanylocationpic.jpg");
`

const PolandContainer = styled(CountryContainer)`
  background-image: url("images/uploads/polandlocationpic.jpg");
`

const Title = styled.h3`
  position: absolute;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f7f7f7;
  text-transform: uppercase;
  font-size: 2.3rem;
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
    top: 50%;
    opacity: 1;
  }
`

const Subtitle = styled.h4`
  font-weight: 700;
  font-size: 1.7rem;
`

const Text = styled.p``

const LocationsButton = () => {
  return (
    <Container>
      <GermanyContainer href="https://www.cepetro.de/cepetroleum.html">
        <Title>Unsere Aktivitäten in Deutschland</Title>
        <Background />
        <Details>
          <Subtitle>CEP Central European Petroleum GmbH</Subtitle>
          <Text>
            ist ein deutsches Erdöl- und Erdgasunternehmen mit Sitz in Berlin,
            das in den Bundesländern Brandenburg und Mecklenburg-Vorpommern nach
            Fördermöglichkeiten für Erdöl und Erdgas sucht. <br /> Click to view
            more.
          </Text>
        </Details>
      </GermanyContainer>
      <PolandContainer href="https://www.cepetro.pl">
        <Title>Our Operations in Poland</Title>
        <Background />
        <Details>
          <Subtitle>Central European Petroleum Ltd SP Zoo</Subtitle>
          <Text>
            Registered in Poland in 2017, is a wholly-owned affiliate of Central
            European Petroleum Ltd. pursuing petroleum exploration opportunities
            in Poland.
            <br /> Click to view more.
          </Text>
        </Details>
      </PolandContainer>
    </Container>
  )
}

export default LocationsButton
