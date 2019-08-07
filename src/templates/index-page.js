import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import './styles.css'

import NavBar from '../components/navbar'
import Footer from '../components/footer'
import News from '../components/news'
import Splash from '../components/splash'

const Container = styled.div`
  @media screen and (max-width: 767px){
    padding: 100px 50px 0px;
  }
  @media screen and (min-width: 768px){
    padding:  125px 75px 0px;
  }
  font-weight: 300;
`

const LearnBtn = styled.div`
  @media screen and (max-width: 767px){
    color: rgba(160, 160, 160, 0.5);
    border: 2px solid rgba(160, 160, 160, 0.5);
  }
  @media screen and (min-width: 768px){
    color: rgba(160, 160, 160, 0.5);
    border: 2px solid rgba(160, 160, 160, 0.5);
    &:hover{
      border-color: rgb(160, 160, 160);
      color: rgb(160, 160, 160);
    }
  }
  display: inline-block;
  text-align: center;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 300ms ease-out;
`

const Heading = styled.h2`
  @media screen and (max-width: 767px){
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px){
    font-size: 2rem;
  }
  margin-bottom: 20px;
  text-align: center;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
`

const ImageAndText = styled.div`
  position: relative;
  img{
    @media screen and (max-width: 767px){
      max-width: 100vw;
      margin-left: -50px
    }
    @media screen and (min-width: 768px){
      width: 55vw;
      margin-bottom: 10vw;
    }
  }
  p{
    @media screen and (max-width: 767px){
      padding-bottom: 100px;
    }
    @media screen and (min-width: 768px){
      font-size: 1rem;
    }
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  line-height: 1.5;
  padding: 25px;
  background: #fff;
  color: #000;
}
`

const ImageLeft = styled(ImageAndText)`
  img{
    @media screen and (min-width: 768px){
      padding-left: 5vw;
    }
  }
  p{
    @media screen and (min-width: 768px){
      position: absolute;
      top: 20px;
      left: 40vw;
    }
  }
`

const ImageRight = styled(ImageAndText)`
  img{
    @media screen and (min-width: 768px){
      padding-right: 5vw;
      float: right;
    }
  }
  p{
    @media screen and (min-width: 768px){
      position: absolute;
      top: 20px;
      right: 40vw;
    }
  }
`

export const AboutTemplate = ({title, image, body}) => (
  <ImageLeft>
    <img src={image} alt='about'/>
    <p>
      <Heading>{title}</Heading>
      {body} <br/> <Link to='/about'><LearnBtn style={{float: 'right', marginTop: '10px'}}>Learn More</LearnBtn></Link>
    </p>
  </ImageLeft>
)

export const WorkTemplate = ({title, image, body}) => (
  <ImageRight>
    <img src={image} alt='work'/>
    <div style={{clear: 'both'}}></div>
    <p>
      <Heading>{title}</Heading>
      {body} <br/> <Link to='/operations'><LearnBtn style={{float: 'right', marginTop: '10px'}}>Learn More</LearnBtn></Link>
    </p>
  </ImageRight>
)

export const LandingPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query landingQuery{
          markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}){
            frontmatter{
              title
              image
              heading
              about{
                title
                image
                body
              }
              work{
                title
                image
                body
              }
            }
          }
        }
      `}
      render={ data => {
        const { frontmatter } = data.markdownRemark
        return(
          <div>
            <NavBar/>
            <main>
              <Splash full={true} title={frontmatter.title} image={frontmatter.image} heading={frontmatter.heading}/>
              <Container>
                <Heading>Lastest News</Heading>
                <News short={true}/>
              </Container>
              <Container>
                <AboutTemplate title={frontmatter.about.title} image={frontmatter.about.image} body={frontmatter.about.body}/>
              </Container>
              <Container>
                <WorkTemplate title={frontmatter.work.title} image={frontmatter.work.image} body={frontmatter.work.body}/>
              </Container>
            </main>
            <Footer/>
          </div>
        )}
      }
    />
  )
}

export default LandingPage
