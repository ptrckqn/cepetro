import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Nav from './nav'
import Header from './header'
import Footer from './footer'

// Primary Blue: #3078bc rgb(48, 120, 188)
// Primary Blue Light: ##40a2ff rgb(64, 162, 255)
// Primary Blue Dark: #296cab rgb(41, 108, 171)

// Primary Red: #ff4a53 rgb(255, 74, 83)
// Primary Red Light: #ff3d47 rgb(255, 61, 71)
// Primary Red Dark: #ba2d34 rgb(186, 45, 52)
const GlobalStyle = createGlobalStyle`
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: inherit;   
    }

    html{
        font-size: 62.5%;
        
        @media (max-width: 37.5em){
            font-size: 75%;   
        }

        @media (max-width: 56.25em){
            font-size: 56.25%;   
        }

        @media (max-width: 75em){
            font-size: 50%;
        }
    }

    body{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 1.7;
        color: #777;
        font-size: 1.6rem;
        padding: 3rem;
        box-sizing: border-box;

        @media (max-width: 56.25em){
            padding: 0;
        }
    }
`

const Layout = ({ children }) => {
    return(
    <div>
        <GlobalStyle />
        <Nav />
        <Header />
        {children}
        <Footer />
    </div>
    )

}

export default Layout