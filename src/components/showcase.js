import React, { Component } from 'react'
import styled from 'styled-components'

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

const Images = styled.div`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 56.25em){
        flex-flow: column;
    }
`

const ImageBox = styled.div`
    width: 50%;
    height: 50rem;
    position: relative;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all .5s;
    @media only screen and (max-width: 56.25em){
        height: 25rem;
        width: 100% !important;
    }
`

const HoverView = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
    opacity: 0;
    transition: opacity .3s;
    &:hover{
        opacity: 1;
    }
`

const ViewMore = styled.p`
    text-decoration: none;
    color: #f0f0f0;
    font-size: 2.3rem;
    text-transform: uppercase;
    cursor: pointer;
`

const Content = styled.div`
    position: relative;
`

const Default = styled.div`
    width: 60%;
    margin: 5rem auto;
    text-align: justify;
    transition: all .5s;
`

const Section = styled.div`
    position: absolute;
    top: 0;
    width: 60%;
    transition: all .5s;
    left: 50%;
    transform: translateX(-50%);
    text-align: justify;
    opacity: 0;
    visibility: hidden;
`

const Germany = styled(Section)`
    transform: translateX(-150%);
`

const Poland = styled(Section)`
    transform: translateX(150%);
`

class Showcase extends Component{
    constructor(){
        super()
        this.state = {
            view: 'default'
        }

        this.toggleGermany = this.toggleGermany.bind(this)
        this.togglePoland = this.togglePoland.bind(this)
    }

    toggleGermany(){
        if(this.state.view === 'germany'){
            this.setState({view: 'default'})
        } else{
            this.setState({view: 'germany'})
        }
    }

    togglePoland(){
        if(this.state.view === 'poland'){
            this.setState({view: 'default'})
        } else{
            this.setState({view: 'poland'})
        }
    }

    render(){
        const hideDefault = {
            opacity: '0',
            visibility: 'hidden'
        }

        const showView= {
            opacity: '1',
            transform: 'translateX(-50%)',
            visibility: 'visible'
        }

        return(
            <Container>
                <HeadingBox>
                    <Secondary>See where we have been</Secondary>
                </HeadingBox>
                <Images>
                    <ImageBox image='https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' onClick={this.toggleGermany} style={{width: this.state.view === 'germany' ? '90%' : ''}}>
                        <HoverView>
                            <ViewMore>{this.state.view !== 'germany' ? 'View our German operations' : 'Go back'}</ViewMore>
                        </HoverView>
                    </ImageBox>
                    <ImageBox image='https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2259&q=80' onClick={this.togglePoland} style={{width: this.state.view === 'poland' ? '90%' : ''}}>
                        <HoverView>
                            <ViewMore>{this.state.view !== 'poland' ? 'View our Polish operations' : 'Go back'}</ViewMore>
                        </HoverView>
                    </ImageBox>
                </Images>
                <Content>
                <Default style={this.state.view === 'default' ? {} : hideDefault}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Adipiscing elit pellentesque habitant morbi tristique. Auctor neque vitae tempus quam pellentesque nec nam. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Interdum velit laoreet id donec ultrices. Eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet massa vitae tortor condimentum lacinia quis. Morbi tincidunt augue interdum velit euismod. Ultricies leo integer malesuada nunc vel risus commodo.
                </Default>
                <Germany style={this.state.view === 'germany' ? showView : {}}>
                Consequat id porta nibh venenatis cras sed felis eget velit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Lobortis scelerisque fermentum dui faucibus in ornare quam. Consequat mauris nunc congue nisi vitae. Etiam erat velit scelerisque in dictum. Netus et malesuada fames ac turpis. Magna eget est lorem ipsum dolor sit amet. Hac habitasse platea dictumst quisque. Sodales ut etiam sit amet nisl purus in mollis. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Netus et malesuada fames ac turpis egestas.
                </Germany>
                <Poland style={this.state.view === 'poland' ? showView : {}}>
                Nunc id cursus metus aliquam eleifend mi in nulla posuere. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Risus in hendrerit gravida rutrum quisque non. Eu consequat ac felis donec. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Purus in mollis nunc sed id semper risus in hendrerit. Sit amet nisl purus in mollis nunc. Nec feugiat in fermentum posuere urna nec. Amet commodo nulla facilisi nullam vehicula. Sagittis nisl rhoncus mattis rhoncus urna neque viverra.
                </Poland>
                </Content>
            </Container>
        )
    }
}
export default Showcase