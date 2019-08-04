import React, { Component } from 'react'
import styled from 'styled-components'

const SplashImage = styled.div`
  @media screen and (max-width: 767px){
    height: ${props => props.full ? '50vh' : '25vh'};
    padding: 100px 20px 0px;
  }
  @media screen and (min-width: 768px){
    height: ${props => props.full ? '60vh' : '30vh'};
    padding: 125px 50px 0px;
  }
  background: ${props => `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), black url(${props.background}) center/cover no-repeat`};
  max-width: 100vw;
`

const Title = styled.h1`
  @media screen and (max-width: 767px){
    padding-right: 10vw;
  }
  @media screen and (min-width: 768px){
    font-size: 3.5rem;
    padding-right: 35vw;
  }
  text-align: left;
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

class Splash extends Component{
  render(){
    return(
      <SplashImage full={this.props.full} background={this.props.image}>
        <Title>{this.props.title}</Title>
        <Tagline>{this.props.heading}</Tagline>
      </SplashImage>
    )
  }
}

export default Splash
