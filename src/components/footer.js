import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logoColour from "../images/cep-logo.png"

const Container = styled.footer`
  background-color: #333;
  padding: 10rem 2rem 8rem;
  display: flex;
  font-size: 1.4rem;
  color: #f7f7f7;
  position: relative;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 56.25em) {
    padding: 6rem 0;
    flex-direction: column;
  }
`
const Box = styled.div`
  @media only screen and (max-width: 56.25em) {
    order: 1;
  }
`

const Logo = styled.img`
  height: 7rem;
  @media only screen and (max-width: 56.25em) {
    height: 10rem;
  }
`

const Section = styled.div`
  float: left;
  width: calc((100% - 6rem) / 2);
  @media (max-width: 56.25em) {
    width: 80% !important;
    order: 2;
  }
  &:not(:last-child) {
    margin-right: 6rem;
    @media (max-width: 56.25em) {
      margin-right: 0;
    }
  }
`

const Navigation = styled.div`
  border-top: 1px solid #777;
  padding-top: 2rem;
  display: inline-block;
  @media (max-width: 56.25em) {
    width: 100%;
    text-align: center;
  }
`

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const To = styled(Link)`
    &:link, &:visited{}
        color: #f7f7f7;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all .3s;
        padding-bottom: 3rem;
    }
    &:hover, &:active{
        color: #3078bc;
    }

`

const Copyright = styled.p`
  border-top: 1px solid #777;
  padding-top: 2rem;
  width: 80%;
  float: right;
  text-align: center;
  @media (max-width: 56.25em) {
    width: 100%;
    float: none;
    order: 3;
  }
`

const Footer = () => {
  return (
    <Container>
      <Section>
        <Navigation>
          <List>
            <Item>
              <To to="/about">People</To>
            </Item>
            <Item>
              <To to="/operations?view=default">Operations</To>
            </Item>
            <Item>
              <To to="/responsibility">Responsibility</To>
            </Item>
            <Item>
              <To to="/news">News</To>
            </Item>
            <Item>
              <To to="/contact">Contact</To>
            </Item>
          </List>
        </Navigation>
      </Section>
      <Box>
        <Logo src={logoColour} alt="CEPetro Logo" />
      </Box>
      <Section>
        <Copyright>&#169; Central European Petroleum LTD</Copyright>
      </Section>
    </Container>
  )
}

export default Footer
