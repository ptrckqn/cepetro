import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled, { css, keyframes } from 'styled-components'
import logoWhite from '../images/cep-logo.png'

const moveInLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-10rem);
    }

    80%{
        transform: translateX(1rem);
    }

    100%{
        opacity: 1;
        transform: translate(0);
    }
`

const moveInRight = keyframes`
    0%{
        opacity: 0;
        transform: translateX(10rem);
    }

    80%{
        transform: translateX(-1rem);
    }

    100%{
        opacity: 1;
        transform: translate(0);
    }
`

const Container = styled.header`
    z-index: 90;
    position: relative;
    height: 95vh;
    background-image: linear-gradient(
        to bottom,
        rgba(41, 108, 171, 0) 40%, rgba(64, 162, 255, .1) 45%,
        rgba(41, 108, 171, 1)),
        url(${props => props.image});
    background-size: cover;
    background-position: center;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

const LogoBox = styled.div`
    position: absolute;
    top: 4rem;
    left: 4rem;
`

const Logo = styled.img`
    height: 8rem;
    @media only screen and (max-width: 56.25em){
        height: 10rem;
    }
`
const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    @media only screen and (max-width: 37.5em){
        top: 50%;
    }
`

const Primary = styled.h1`
    color: #fff;
    text-transform: uppercase;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    margin-bottom: 6rem;
`

const Main = styled.span`
    display: block;
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: 1.5rem;
    animation: ${css`${moveInLeft} 1s ease-out`} ;

    @media(max-width: 37.5em){
        letter-spacing: 1rem;
        font-size: 5rem;
    }
`

const Sub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: .75rem;
    animation: ${css`${moveInRight} 1s ease-out`} ;
    @media(max-width: 37.5em){
        letter-spacing: .5rem;
    }
`

const Header = (props) => {
    return(
        <StaticQuery
            query={graphql`
                query headerQuery{
                    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}){
                        frontmatter{
                            title
                            heading
                            image
                        }
                    }
                }
            `}
            render={ data => {
                const { frontmatter } = data.markdownRemark
                return(
                    <Container image={props.image}>
                        <LogoBox>
                            <Link to='/'><Logo src={logoWhite} alt='Logo'/></Link>
                        </LogoBox>
                        <TextBox>
                            <Primary>
                                <Main>{frontmatter.title}</Main>
                                <Sub>{frontmatter.heading}</Sub>
                            </Primary>
                        </TextBox>
                    </Container>
                )
            }}
        />
    )
}

export default Header
