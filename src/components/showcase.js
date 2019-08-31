import React, { Component } from 'react'
import styled from 'styled-components'
import remark from 'remark'
import remarkHtml from 'remark-html'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 25rem 0;
    margin-top: -20vh;
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

const Contents = styled.div`
    position: relative;
    height: 75vh;
    @media only screen and (max-width: 37.5em){
      height: 125vh;
    }
`

const Default = styled.div`
    width: 60%;
    margin: 5rem auto;
    transition: all .5s;
    @media only screen and (max-width: 56.25em){
      width: 85%;
    }
`

const Section = styled.div`
    position: absolute;
    top: 0;
    width: 60%;
    transition: all .5s;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    @media only screen and (max-width: 56.25em){
      width: 85%;
    }
`

const Germany = styled(Section)`
    transform: translateX(-150%);
`

const Poland = styled(Section)`
    transform: translateX(150%);
`

const Content = styled.div`
    font-size: 1.6rem;
    margin-bottom: 3rem;
    font-weight: 300;
    h1{
        font-weight: 700;
        text-transform: uppercase;
    }
    h2{
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

class Showcase extends Component{
    constructor(){
        super()
        this.state = {
            view: 'default'
        }

        this.toggleGermany = this.toggleGermany.bind(this)
        this.togglePoland = this.togglePoland.bind(this)
    }

    componentDidMount(){

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
        const germanOps = remark().use(remarkHtml).processSync(this.props.germanOps).toString()
        const polishOps = remark().use(remarkHtml).processSync(this.props.polishOps).toString()
        const createHTML = (toHtml) => { return {__html: toHtml} }
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
                <Contents>
                <Default style={this.state.view === 'default' ? {} : hideDefault}>
                    <Content dangerouslySetInnerHTML={createHTML(this.props.default)}/>
                </Default>
                <Germany style={this.state.view === 'germany' ? showView : {}}>
                    <Content dangerouslySetInnerHTML={createHTML(germanOps)}/>
                </Germany>
                <Poland style={this.state.view === 'poland' ? showView : {}} >
                    <Content dangerouslySetInnerHTML={createHTML(polishOps)}/>
                </Poland>
                </Contents>
            </Container>
        )
    }
}
export default Showcase
