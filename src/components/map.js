import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import europe from '../images/basemap.png'
import germany from '../images/germany.png'
import poland from '../images/poland.png'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 10rem 0;
    margin-top: -20vh;
    @media only screen and (max-width: 56.25em){
        margin-bottom: 25vh;
    }
`

const HeadingBox = styled.div`
    text-align: center;
    margin-bottom: 8rem;
`

const Secondary = styled.h2`
    display: inline-block;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    background-image: linear-gradient(to right, rgb(64, 162, 255), rgb(41, 108, 171));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    @media(max-width: 56.25em){
        font-size: 3rem;
    }
    @media (max-width: 37.5em){
        font-size: 2.25em;
    }
`

const MapBox = styled.div`
   background-image: url(${europe});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   height: 60rem;
   margin: 0 auto;
   position: relative;
`

const Country = styled.img`
   position: absolute;
   transition: all .3s;
   cursor: pointer;
   opacity: 0;
   &:hover{
      opacity: 1;
      transform: scale(1.5);
   }
`

const Germany = styled(Country)`
   width: 11%;
   max-width: 13.5rem;
    left: 43%;
    top: 37%;
    @media only screen and (max-width: 56.25em){
       top: 43%;
    }
    @media only screen and (max-width: 32em){
       top: 45%;
    }
`

const Poland = styled(Country)`
   width: 12%;
   max-width: 14rem;
   left: 53%;
   top: 38.5%;
   @media only screen and (max-width: 56.25em){
      top: 43%;
   }  
   @media only screen and (max-width: 32em){
      top: 45%;
   }
`


class Map extends Component{
    render(){
        return(
            <Container>
                <HeadingBox>
                    <Secondary>{this.props.heading}</Secondary>
                </HeadingBox>
                <MapBox>
                   <Link to='/operations'><Germany src={germany}/></Link>
                   <Link to='/operations'><Poland src={poland} /></Link>
                </MapBox>
            </Container>

        )
    }
}

export default Map