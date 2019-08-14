import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logoColour from '../images/cep-logo.png'

const Container = styled.footer`
    background-color: #333;
    padding: 10rem 2rem;
    font-size: 1.4rem;
    color: #f7f7f7;

    @media (max-width: 56.25){
        padding: 8rem 0;
    }
    
`
const Box = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`

const Logo = styled.img`
    height: 10rem;
`

const Row = styled.div`
    max-width: 114rem;
    margin: 0 auto;
    &:not(:last-child){
        margin-bottom: 8rem;
        @media(max-width: 56.25em){
            margin-bottom: 6rem;
        }
    }
    &::after{
        content: '';
        display: table;
        clear: both;
    }
    @media(max-width: 56.25em){
        max-width: 70rem;
    }
`

const Section = styled.div`
    float: left;
    width: calc((100% - 6rem) / 2);
    @media(max-width: 56.25em){
        width: 100% !important;
    }
    &:not(:last-child){
        margin-right: 6rem;
        @media(max-width: 56.25em){
            margin-right: 0;
        }
    }

`

const Navigation = styled.div`
    border-top: 1px solid #777;
    padding-top: 2rem;
    display: inline-block;
    @media(max-width: 56.25em){
        width: 100%;
        text-align: center;
    }
`

const List = styled.ul`
    list-style: none;
`

const Item = styled.li`
    display: inline-block;
    &:not(:last-child){
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
    width:  80%;
    float: right;
    @media(max-width: 56.25em){
        width: 100%;
        float: none;
    }
`

const Content = styled.div`
    font-weight: 300;
    text-align: left;
    h1{
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    h2{
        font-size: 1.6rem;
        font-weight: 400;
        text-transform: uppercase;
    }
    h1, h2, p{
        padding: .5rem 0;
    }
    hr{
        margin: 1rem 3rem;
    }
    a{
        color: #ff4a53;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
    blockquote{
        border-left: 1px solid #777;
        padding-left: 2rem;
    }
    img{
        max-width: 100%;
        object-fit: contain;
    }
`

const Footer = () => {
    return(
        <Container>
            <Box>
                <Logo src={logoColour} alt='CEPetro Logo'/>
            </Box>
            <Row>
                <Section>
                    <Navigation>
                        <List>
                            <Item><To to='/about'>People</To></Item>
                            <Item><To to='/operations'>Operations</To></Item>
                            <Item><To to='/responsibility'>Responsibility</To></Item>
                            <Item><To to='/news'>News</To></Item>
                            <Item><To to='/contact'>Contact</To></Item>
                        </List>
                    </Navigation>
                </Section>
                <Section>
                    <Copyright>
                        &#169; 2019 CEP Central European Petroleum GmbH
                    </Copyright>
                </Section>
            </Row>
        </Container>
    )
}

export default Footer