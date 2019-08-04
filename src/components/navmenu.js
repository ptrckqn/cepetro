import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #bdc3c7;  /* fallback for old browsers */
  top: 0;
  left: 0;
  z-index: 98;
`

const NavContainer = styled.div`
  @media screen and (max-width: 767px){
    margin: 15% auto;
  }
  @media screen and (min-width: 768px){
    margin: 10% 7%;
  }
`

const NavLinks = styled.ul`
  @media screen and (max-width: 767px){
    font-size: 1.75rem;
    margin-top: 35%;
  }
  @media screen and (min-width: 768px){
    font-size: 2.5rem;
    margin-top: 20%;
  }
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 5px;
  color: white;
  font-size: 2.25em;
  margin-top: 20%;
`

const NavLink = styled.li`
  @media screen and (max-width: 767px){
    margin-right: 45vw;
  }
  @media screen and (min-width: 768px){
    margin-right: 55vw;
    &:after{
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    &:hover:after{
      width: 100%;
      left: 0;
    }
  }
  position: relative;
  display: inline-block;
`

const NavLinkSecondary = styled(NavLink)`
  font-style: oblique;
  font-weight: 300;
  font-size: 0.75em;
`

class NavMenu extends Component{

  render(){
    if(this.props.menuVisible){
      document.body.classList.add('noScroll')
    } else{
      document.body.classList.remove('noScroll')
    }

    return(
      <Nav className={this.props.menuVisible ? 'active' : 'hidden'}>
        <NavContainer>
          <NavLinks className={this.props.menuVisible ? 'active' : 'hidden'} >
            <NavLink><Link to='#'>Home</Link></NavLink>
            <NavLink><Link to='#'>People</Link></NavLink>
            <NavLink><Link to='#'>Operations</Link></NavLink>
            <NavLink><Link to='#'>Responsibility</Link></NavLink>
          </NavLinks>
          <NavLinks className={this.props.menuVisible ? 'active' : 'hidden'}>
            <NavLinkSecondary><Link to='#'>News</Link></NavLinkSecondary>
            <NavLinkSecondary><Link to='#'>Contact</Link></NavLinkSecondary>
          </NavLinks>
        </NavContainer>
      </Nav>
    )
  }
}
export default NavMenu
