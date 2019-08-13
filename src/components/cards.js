import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 25rem 0 15rem 0;
    margin-top: -20vh;
    @media(max-width: 56.25em){

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

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 30%;
    justify-content: space-around;
    @media(max-width: 56.25em){
        flex: 0 0 100%;
        flex-direction: column
        justify-items: center;
    }
`

const Section = styled.div`
    float: left;
    width: calc((100% - (2 * 12rem)) / 3);
    @media(max-width: 56.25em){
        width: 90% !important;
    }
`

const Box = styled.div`
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 52rem;
    margin-bottom: 3rem;
`

const Side = styled.div`
    height: 52rem;
    transition: all .5s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow; hidden;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .15);
`

const Front = styled(Side)`
    background-color: #fff;
    ${Box}:hover &{
        transform: rotateY(-180deg);
    }
`

const Back = styled(Side)`
    transform: rotateY(180deg);
    background-image: linear-gradient(to right bottom, #ff4a53, #ba2d34);
    ${Box}:hover &{
        transform: rotateY(0);
    }
`

const Photo = styled.div`
    background-size: cover;
    background-position: center;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    background-image: linear-gradient(to right bottom, #ff4a53, #ba2d34), url(${props => props.background})
`

const Title = styled.h4`
    font-size: 2.5rem; 
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    top: 20rem;
    right: 2rem; 
    text-align: right;
    span{
        padding: .75rem 1.5rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        width: 50;
        background-color: rgba(255, 74, 83, .85);
    }
`

const Paragraph = styled.p`
    position: absolute;
    bottom: 0;
    padding: 3rem;
    font-size: 1.6rem;
    &:not(:last-child){
        margin-bottom: 3rem;
    }
`

const Cta = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
`

const CtaBox = styled.div`
    text-align: center;
    color: #fff;
    margin-bottom: 8rem;
`

const Info = styled.p`
    position: absolute;
    bottom: 0;
    left: 2rem;
    font-size: 2.5rem;
    font-weight: 100;
`

const Btn = styled(Link)`
    margin-top: 6rem;
    background-color: #fff;
    color: #777;
    &, &:link, &:visited{
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.6rem;
    }
    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(#000,.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    &:active, &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(#000,.2);
    }
    &::after{
        background-color: #fff;
    }
`

class Card extends Component{
    render(){
        return(
            <Section>
                <Box>
                    <Front>
                        <Photo background={this.props.background}>&nbsp;</Photo>
                        <Title><span>{this.props.title}</span></Title>
                        <Info>
                            {this.props.date}
                        </Info>
                    </Front>
                    <Back>
                        <Cta>
                            <CtaBox>
                                <Btn to={this.props.url}>Continue Reading</Btn>
                            </CtaBox>
                        </Cta>
                    </Back>
                </Box>
            </Section>
    )
    }
}

class Cards extends Component{
    constructor(props){
        super(props)
        this.state = {
            short: this.props.short
        }
    }

    render(){
        return(
            <Container>
                <HeadingBox>
                    <Secondary>Catch up on what we have done</Secondary>
                </HeadingBox>
                <StaticQuery 
                    query={ graphql`
                    query newsPostsQuery{
                        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news-post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
                        edges {
                            node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                image
                                date(formatString: "MMM Do, YYYY")
                            }
                            }
                        }
                        }
                    }`}
                    render={ data => {
                        var { edges: posts } = data.allMarkdownRemark
                        if(this.state.short){
                            posts = posts.slice(0, 3)
                        }
                        return(
                            <FlexContainer>
                                {posts && posts.map(({ node: post }) => (
                                    <Card 
                                        key={post.id}
                                        background={post.frontmatter.image}
                                        title={post.frontmatter.title}
                                        date={post.frontmatter.date}
                                        url={post.fields.slug}
                                    />
                                ))}
                            </FlexContainer>
                        )
                    }}
                />
            </Container>
        )
    }

}

export default Cards