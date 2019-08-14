import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import remark from 'remark'
import remarkHtml from 'remark-html'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 25rem 0;
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
    padding: 3rem;
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

const Tertiary = styled.h3`
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
`

const Paragraph = styled.p`
    font-size: 1.6rem;
    &:not(:last-child){
        margin-bottom: 3rem;
    }
`

const Btn = styled(Link)`
    &:link, &:visited{
        font-size: 1.6rem;
        color: #3078bc;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid #3078bc;
        padding: 3px;
        transition: all .2s;
    }
    &:hover{
        background-color: #3078bc;
        color: #fff;
        box-shadow: 0 1rem 2rem rgba(0,0,0, .15);
        transform: translateY(-2px);
    }
    &:active{
        transform: translateY(0);
    }
`

const Composition = styled.div`
    position: relative;
`

const Photo = styled.img`
    width: 75%;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .4);
    border-radius: 3px;
    position: absolute;
    z-index; 9;
    transition: all .3s;
    &:hover{
        transform: scale(1.05) translateY(-5px);
        z-index: 10;
    }
    ${Composition}:hover &:not(:hover){
        transform: scale(0.95);
    }
`

const PhotoOne = styled(Photo)`
    left: 0;
    top: -4rem;
`

const PhotoTwo = styled(Photo)`
    right: 0;
    top: 4rem;
`

const PhotoThree = styled(Photo)`
    left: 2rem;
    top: 14rem;
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
    hr{
        margin: 1rem 3rem;
    }
    h1, h2, p{
        padding: .5rem 0;
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

class Highlights extends Component{
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
                        <Tertiary>{this.props.titleOne}</Tertiary>
                        <Paragraph>
                            <Content dangerouslySetInnerHTML={createHTML(bodyOne)}/>
                        </Paragraph>
                        <Tertiary>{this.props.titleTwo}</Tertiary>
                        <Paragraph>
                            <Content dangerouslySetInnerHTML={createHTML(bodyTwo)}/>
                        </Paragraph>
                        {this.props.showButton?<Btn to='/about'>Learn More &rarr;</Btn> : <span></span>}
                    </Section>
                    <Section>
                        <Composition>
                            <PhotoOne src={this.props.picOne} alt='Photo 1'/>
                            <PhotoTwo src={this.props.picTwo} alt='Photo 2'/>
                            <PhotoThree src={this.props.picThree} alt='Photo 3'/>
                        </Composition>
                    </Section>
                </Row>
            </Container>
        )
    }
}

export default Highlights