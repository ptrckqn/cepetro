import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

const Container = styled.footer`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background-color: #333;
  padding: 10rem 2rem 8rem;
  font-size: 1.4rem;
  color: #f7f7f7;
  @media only screen and (max-width: 56.25em) {
    padding: 6rem 0;
    grid-template-columns: 1fr;
  }
`
const LogoBox = styled.div`
  width: 60%;
  @media only screen and (max-width: 56.25em) {
    width: 30%;
  }
`

const Section = styled.div`
  @media (max-width: 56.25em) {
  }
`

const Navigation = styled.div`
  border-top: 1px solid #777;
  padding-top: 2rem;
  display: inline-block;
  @media (max-width: 56.25em) {
    text-align: center;
  }l
`

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  grid-column-gap: 1.5rem;
  justify-content: center;
  justify-items: center;
`

const Item = styled.li``

const To = styled(Link)`
  &:link,
  &:visited {
    color: #f7f7f7;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.3s;
    padding-bottom: 3rem;
  }
  &:hover,
  &:active {
    color: #3078bc;
  }
`

const DownloadLink = styled.a`
  &:link,
  &:visited {
    color: #777;
    font-size: 1.1rem;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.3s;
    padding-bottom: 3rem;
    margin: 0 1.5rem;
    cursor: pointer;
  }
  &:hover,
  &:active {
    color: #3078bc;
  }
`

const Copyright = styled.p`
  border-top: 1px solid #777;
  padding-top: 2rem;
  text-align: center;
  display: block;
  @media (max-width: 56.25em) {
    width: 100%;
    order: 3;
  }
`

const Legal = styled.span`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
`

const MadeBy = styled.a`
  color: #777;
  display: block;
  text-decoration: none;
  padding-top: 2rem;
  width: 80%;
  text-align: center;
  &:hover {
    color: #fff;
  }
  @media (max-width: 56.25em) {
    width: 100%;
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
      <LogoBox>
        <Logo />
      </LogoBox>
      <Section>
        <Copyright>&#169; Central European Petroleum Ltd.</Copyright>
        {/* <MadeBy href="https://www.github.com/ptrckqn" target="__blank">
          Made by Patrick Quan
        </MadeBy> */}
      </Section>
      <Legal>
        <DownloadLink href="/images/uploads/privacy-policy.pdf">
          Privacy Policy
        </DownloadLink>
        <DownloadLink href="/images/uploads/terms-of-use.pdf">
          Terms of use
        </DownloadLink>
      </Legal>
    </Container>
  )
}

export default Footer
