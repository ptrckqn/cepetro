import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 98;
  width: 100%;
  @media only screen and (max-width: 43em) {
    display: none;
  }
`

const Navigation = styled.nav``

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
`

const Item = styled.ul`
  font-size: 1.6rem;
  font-weight: 400;
  @media only screen and (min-width: 56.25em) {
    font-size: 1.8rem;
  }
`

const To = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 250%;
  transition: all 0.4s;
  padding: 1rem 2rem;
  &:hover,
  &:active {
    background-position: 100%;
    color: #000;
    transform: translateX(1rem);
  }
`

const LogoBox = styled.span`
  width: 20rem;
  margin: 1rem auto 1rem 2rem;
`

const NavDesktop = ({ noNav }) => {
  return (
    <Container>
      <Navigation>
        <List>
          <LogoBox>
            <Link to="/">
              <Logo />
            </Link>
          </LogoBox>

          {noNav ? null : (
            <>
              <Item>
                <To to="/about">People</To>
              </Item>
              <Item>
                <To to="/operations">Operations</To>
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
            </>
          )}
        </List>
      </Navigation>
    </Container>
  )
}

export default NavDesktop
