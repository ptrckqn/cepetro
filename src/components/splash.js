import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import brand from '../images/cep-logo.png'

const SplashImage = styled.div`
  @media screen and (max-width: 767px){
    height: ${props => props.full ? '50vh' : '25vh'};
    padding: 100px 20px 0px;
  }
  @media screen and (min-width: 768px){
    height: ${props => props.full ? '60vh' : '30vh'};
    padding: 125px 50px 0px;
  }
  background: ${props => `linear-gradient(to right bottom, rgba(41, 152, 255, 0.8), rgba(16, 91, 161, 0.8)), url(${props.background}) center/cover no-repeat`};
  max-width: 100vw;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`

const Title = styled.h1`
  @media screen and (min-width: 768px){
    font-size: 3.5rem;
  }
  text-align: center;
  color: #fff;
  font-weight: 500;
`

const Tagline = styled(Title)`
  @media screen and (max-width: 767px){
  font-size: 1.25rem;
  }
  @media screen and (min-width: 768px){
    font-size: 2rem;
  }
  font-weight: 300;
`

const BrandLogo = styled.span`
@media screen and (max-width: 767px){
  margin-top: 4vw;
  width: 20vw;
  height: 15vw;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (min-width: 768px){
  margin-top: 1vw;
  height: 7vw;
  width: 15vw;
  left: 0;
}
  top: 0;
  cursor: pointer;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 100;
`

class Splash extends Component{
  render(){
    return(
      <SplashImage full={this.props.full} background={this.props.image}>
        <Link to='/'><BrandLogo style={{backgroundImage: `url(${brand})`}}></BrandLogo></Link>  
        <Title>{this.props.title}</Title>
        <Tagline>{this.props.heading}</Tagline>
      </SplashImage>
    )
  }
}

export default Splash
