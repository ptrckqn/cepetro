import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

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
const LogoBox = styled.div`
  @media only screen and (max-width: 56.25em) {
    order: 1;
    width: 25%;
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
    color: #f7f7f7;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.3s;
    padding-bottom: 3rem;
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
  width: 80%;
  float: right;
  text-align: center;
  @media (max-width: 56.25em) {
    width: 100%;
    float: none;
    order: 3;
  }
`

const MadeBy = styled.a`
  color: #777;
  text-decoration: none;
  padding-top: 2rem;
  width: 80%;
  float: right;
  text-align: center;
  &:hover {
    color: #fff;
  }
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
            <Item style={{ gridColumn: "1 / 3" }}>
              <DownloadLink href="/images/uploads/terms-of-use.pdf">
                Terms of use
              </DownloadLink>
            </Item>
            <Item style={{ gridColumn: "3 / 6" }}>
              <DownloadLink href="/images/uploads/privacy-policy.pdf">
                Privacy Policy
              </DownloadLink>
            </Item>
          </List>
        </Navigation>
      </Section>
      <LogoBox>
        <Logo />
      </LogoBox>
      <Section>
        <Copyright>&#169; Central European Petroleum Ltd.</Copyright>
        <MadeBy href="https://www.github.com/ptrckqn" target="__blank">
          Made by Patrick Quan
        </MadeBy>
      </Section>
    </Container>
  )
}

export default Footer
