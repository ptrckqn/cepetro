import React, { Component } from 'react'
import styled from 'styled-components'
import remark from 'remark'
import remarkHtml from 'remark-html'


const Container = styled.section`
    padding: 20rem 0;
    margin-top: -20vh;
    background-color: #f7f7f7;
    @media(max-width: 56.25em){
        padding: 3rem;
        padding-top: 20rem;
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

const Box = styled.div`
    background-color: rgba(255, 255, 255, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow; 0 1.5rem 4rem rgba(#000, .15);
    transition: transform .3s;
    margin-bottom: 3rem;
    &:hover{
        transform: translateY(-1.5rem) scale(1.05);
    }
`

const Tertiary = styled.h3`
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
`

const Paragraph = styled.p`
    font-size: 1.6rem;
    &:not(:last-child){
        margin-bottom: 3rem;
    }
`

const Content = styled.span`
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
    ul, ol{
        padding-left: 2rem;
    }
`

class Features extends Component{
    render(){
        const bodyOne = remark().use(remarkHtml).processSync(this.props.bodyOne).toString()
        const bodyTwo = remark().use(remarkHtml).processSync(this.props.bodyTwo).toString()
        const createHTML = (toHtml) => { return {__html: toHtml} }

        return(
            <Container>
                <HeadingBox>
                    <Secondary>{this.props.heading}</Secondary>
                </HeadingBox>
                <Row>
                    <Section>
                        <Box>
                            <Tertiary>
                                {this.props.titleOne}
                            </Tertiary>
                            <Paragraph>
                                <Content dangerouslySetInnerHTML={createHTML(bodyOne)}/>
                            </Paragraph>
                        </Box>
                    </Section>
                    <Section>
                        <Box>
                            <Tertiary>
                                {this.props.titleTwo}
                            </Tertiary>
                            <Paragraph>
                                <Content dangerouslySetInnerHTML={createHTML(bodyTwo)}/>
                            </Paragraph>
                        </Box>
                    </Section>
                </Row>
            </Container>
        )
    }
}

export default Features