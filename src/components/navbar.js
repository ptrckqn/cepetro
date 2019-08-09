import React, { Component } from 'react'
import { Link } from 'gatsby'
import NavMenu from './navmenu'
import styled from 'styled-components'
import menu from '../images/menu.svg'
import close from '../images/close.svg'
import brand from '../images/cep-logo.png'

const MenuIcon = styled.span`
  @media screen and (max-width: 767px){
    margin-top: 10vw;
    margin-left: 6vw;
    width: 4vw;
    height: 4vw;
  }
  @media screen and (min-width: 768px){
    margin-top: 3vw;
    margin-left: 2vw;
    height: 2.5vw;
    width: 2.5vw;
  }
  display: block;
  cursor: pointer;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const BrandLogo = styled.span`
@media screen and (max-width: 767px){
  margin-top: 4vw;
  width: 35vw;
  height: 15vw;
}
@media screen and (min-width: 768px){
  margin-top: 1vw;
  height: 7vw;
  width: 15vw;
}
  display: block;
  cursor: pointer;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 100;
`

const BrandDiv = styled.div`
  z-index: 99;
`



class NavBar extends Component{
  constructor(){
    super()

    this.handleScroll = this.handleScroll.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.state = {
      menuVisible: false,
      show: true,
      scrollPos: 0
    }
  }

  //Hide the nav when scrolling down, and view when scrolling up
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(){
    const { scrollPos } = this.state

    var showBool = document.body.getBoundingClientRect().top > -50 ? true : document.body.getBoundingClientRect().top > scrollPos

    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: showBool
    })
  }

  toggleState(){
    this.setState({ menuVisible: !this.state.menuVisible })
  }

  render(){
    return(
      <nav>
        <MenuIcon style={this.state.menuVisible ? {backgroundImage: `url(${close})`} : {backgroundImage: `url(${menu})`}} onClick={this.toggleState}/>
        <BrandDiv className={this.state.show ? 'active' : 'hidden'}>
          <Link to='/'><BrandLogo style={{backgroundImage: `url(${brand})`}}></BrandLogo></Link>    
        </BrandDiv>
        <NavMenu menuVisible={this.state.menuVisible}/>
      </nav>
    )
  }
}

export default NavBar


// Global styles required
// a{
//   color: white;
//   text-decoration: none;
// }
//
// .noScroll{
//   overflow: hidden;
// }
//
// .activeBrand {
//   opacity: 1;
//   visibility: visible;
//   transition: all 300ms;
// }
// .hiddenBrand {
//   opacity: 0;
//   visibility: hidden;
//   transition: all 300ms;
// }