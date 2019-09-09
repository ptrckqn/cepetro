import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logoWhite from "../images/cep-logo.png"

const Container = styled.div``

const Checkbox = styled.input`
    display: none;
}
`

const Icon = styled.span`
  position: relative;
  margin-top: 3.5rem;
  &,
  &::before,
  &::after {
    display: inline-block;
    width: 3rem;
    height: 2px;
    background-color: #333;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`

const NavBtn = styled.label`
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 99;
    box-shadow: 0 1rem 3rem rgba(0,0,0, .1);
    text-align: center;
    cursor: pointer;

    &:hover ${Icon}::before{
        top: -1rem;
    }

    &:hover ${Icon}::after{
        top: 1rem;
    }


    ${Checkbox}:checked ~  & ${Icon}{
        background-color: transparent;
    }

    ${Checkbox}:checked ~ & ${Icon}::before{
        top: 0;
        transform: rotate(135deg);
    }

    ${Checkbox}:checked ~  & ${Icon}::after{
        top: 0;
        transform: rotate(-135deg);
    }

    @media (max-width: 56.25em){
        top: 4rem;
        right: 4rem;
    }

    @media (max-width: 37.5em){
        top: 3rem;
        right: 3rem;
    }
`

const Background = styled.div`
  height: 240rem;
  width: 240rem;
  border-radius: 50%;
  position: fixed;
  top: -110.5rem;
  right: -110.5rem;
  background-image: radial-gradient(#40a2ff, #296cab);
  z-index: 97;
  transform: scale(.02);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  ${Checkbox}:checked ~ & {
    transform: scale(1);
  }

  @media (max-width: 56.25em) {
    top: -112.5rem;
    right: -112.5rem;
  }

  @media (max-width: 37.5em) {
    top: -113.5rem;
    right: -113.5rem;
  }
`

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  opacity: 0;
  width: 100%;
  transform: translateY(-100%);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${Checkbox}:checked ~ & {
    opacity: 1;
    transform: translateY(0);
  }
`

const List = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
`

const Item = styled.li`
  margin: 1rem;
`

const To = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
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

    span {
      margin-right: 1rem;
      display: inline-block;
    }
  }
  &:hover,
  &:active {
    background-position: 100%;
    color: #3078bc;
    transform: translateX(1rem);
  }
`

const Logo = styled.img`
  transform: translate(3rem, 3rem);
  height: 10rem;
`

const Nav = () => {
  return (
    <Container>
      <Checkbox type="checkbox" id="nav-toggle" />
      <NavBtn htmlFor="nav-toggle">
        <Icon />
      </NavBtn>
      <Background>&nbsp;</Background>
      <Navigation>
        <Link to="/">
          <Logo src={logoWhite} alt="Logo" />
        </Link>
        <List>
          <Item>
            <To to="/">
              <span>01</span>Home
            </To>
          </Item>
          <Item>
            <To to="/about">
              <span>02</span>People
            </To>
          </Item>
          <Item>
            <To to="/operations">
              <span>03</span>Operations
            </To>
          </Item>
          <Item>
            <To to="/responsibility">
              <span>04</span>Responsibility
            </To>
          </Item>
          <Item>
            <To to="/news">
              <span>05</span>News
            </To>
          </Item>
          <Item>
            <To to="/contact">
              <span>06</span>Contact
            </To>
          </Item>
        </List>
      </Navigation>
    </Container>
  )
}

export default Nav
