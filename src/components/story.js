import React, { Component } from 'react'
import styled from 'styled-components'
import remark from 'remark'
import remarkHtml from 'remark-html'

const Container = styled.section`
    padding: 20rem 0;
    position: relative;
    background-color: #f7f7f7;
    margin-top: -20vh;
`

const BackgroundVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .15;
`

const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
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

const Box = styled.div`
    width: 75%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba(0,0,0, .1);
    background-color: rgba(255,255,255, .6);
    border-radius: 3px;
    padding: 6rem;
    padding-left: 9rem;
    font-size: 1.6rem;
    transform: skewX(-12deg);
    @media(max-width: 56.25em){
        transform: skewX(0);  
        padding: 3rem;
    }
`

const Shape = styled.figure`
    width: 15rem;
    height: 15rem;
    float: left;
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path:circle(50% at 50% 50%);
    clip-path:circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
    position: relative;
    @media(max-width: 56.25em){
        float: none;
        margin: 0 auto;
        transform: skewX(0deg);
    }
`

const Image = styled.img`
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    transition: all .5s;
    ${Box}:hover &{
        transform: translateX(-4rem) scale(1);
        filter: blur(2px) brightness(80%);
    }
`

const Caption = styled.figcaption`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: skewX(12deg);
    ${Box}:hover &{
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    @media(max-width: 56.25em){
        transform: skewX(0);  
    }
`

const Detail = styled.div`
    
`

const Tertiary = styled.h3`
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    transform: skewX(12deg);
    @media(max-width: 56.25em){
        transform: skewX(0);  
    }
`

const Paragraph = styled.p`
    padding: 3rem;
    font-size: 1.6rem;
    transform: skewX(12deg);
    @media(max-width: 56.25em){
        transform: skewX(0);  
        padding: 0;
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

class Story extends Component{
    render(){
        const contactEn = remark().use(remarkHtml).processSync(this.props.contactEn).toString()
        const contactDe = remark().use(remarkHtml).processSync(this.props.contactDe).toString()
        const createHTML = (toHtml) => { return {__html: toHtml} }

        return(
            <Container>
                <HeadingBox>
                    <Secondary>{this.props.heading}</Secondary>
                </HeadingBox>
                <Row>
                    <Box>
                        <Shape>
                            <Image src={this.props.picEn} alt='Location' />
                        </Shape>
                        <Detail>
                            <Tertiary>
                                {this.props.titleOne}
                            </Tertiary>
                            <Paragraph>  
                                <Content dangerouslySetInnerHTML={createHTML(contactEn)}/>
                            </Paragraph>
                        </Detail>
                    </Box>
                </Row>
                <Row>
                    <Box>
                        <Shape>
                            <Image src={this.props.picDe} alt='Location' />
                        </Shape>
                        <Detail>
                            <Tertiary>
                                {this.props.titleTwo}
                            </Tertiary>
                            <Paragraph>  
                                <Content dangerouslySetInnerHTML={createHTML(contactDe)}/>
                            </Paragraph>
                        </Detail>
                    </Box>
                </Row> 
            </Container>
        )
    }
 
}

export default Story