import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 10rem 0;
    margin-top: -20vh;
    @media only screen and (max-width: 56.25em){
        margin-bottom: 25vh;
    }
`

const Images = styled.div`
    margin-top: 10rem;
    width: 100%;
    display: flex;
    flex: 0 1 50%;
    justify-content: center;
`

const ImageBox = styled.div`
    width: 50%;
    height: 50rem;
    position: relative;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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

const Details = styled.p`
    text-align: justify;
    width: 60%;
    margin: 0 auto;
    padding: 5rem 0;
`

const Showcase = () => {
    return(
        <Container>
            <Images>
                <ImageBox image='https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'>
                    <Link to='/operations/germany'>
                        <HoverView>
                            <ViewMore>View our German operations</ViewMore>
                        </HoverView>
                    </Link>
                </ImageBox>
                <ImageBox image='https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2259&q=80'>
                    <Link to='/operations/poland'>
                        <HoverView>
                            <ViewMore>View our Polish operations</ViewMore>
                        </HoverView>
                    </Link>
                </ImageBox>
            </Images>
            <Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Adipiscing elit pellentesque habitant morbi tristique. Auctor neque vitae tempus quam pellentesque nec nam. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Interdum velit laoreet id donec ultrices. Eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet massa vitae tortor condimentum lacinia quis. Morbi tincidunt augue interdum velit euismod. Ultricies leo integer malesuada nunc vel risus commodo.
            </Details>
            <Details>
            Consequat id porta nibh venenatis cras sed felis eget velit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Lobortis scelerisque fermentum dui faucibus in ornare quam. Consequat mauris nunc congue nisi vitae. Etiam erat velit scelerisque in dictum. Netus et malesuada fames ac turpis. Magna eget est lorem ipsum dolor sit amet. Hac habitasse platea dictumst quisque. Sodales ut etiam sit amet nisl purus in mollis. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Netus et malesuada fames ac turpis egestas.
            </Details>
            <Details>
            Nunc id cursus metus aliquam eleifend mi in nulla posuere. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Risus in hendrerit gravida rutrum quisque non. Eu consequat ac felis donec. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Purus in mollis nunc sed id semper risus in hendrerit. Sit amet nisl purus in mollis nunc. Nec feugiat in fermentum posuere urna nec. Amet commodo nulla facilisi nullam vehicula. Sagittis nisl rhoncus mattis rhoncus urna neque viverra.
            </Details>
        </Container>
    )
}
export default Showcase