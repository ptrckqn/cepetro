import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Splash from '../components/splash'

const Container = styled.div`
  @media screen and (max-width: 767px){
    padding: 100px 50px 0px;
  }
  @media screen and (min-width: 768px){
    padding:  125px 50px 0px;
  }
  font-weight: 300;
`

const ContactGrid = styled.div`
  @media screen and (max-width: 767px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  display: grid;
`
const Heading = styled.h2`
  @media screen and (max-width: 767px){
    font-size: 1.1rem;
  }
  @media screen and (min-width: 768px){
    font-size: 1.5rem;
  }
  margin-bottom: 20px;
  text-align: left;
  font-weight: 600;
`

const Description = styled.h4`
  @media screen and (max-width: 767px){
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px){
    font-size: 1.1rem;
  }
  font-weight: 300;
`

const GoogleMap = styled.iframe`
  width: 100%;
  height: 50vh;
  border: 0;
`

const ContactPage = () => {
  return(
    <StaticQuery
      query={graphql`
        query contactQuery{
          markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}){
            frontmatter{
              title
              image
              addressEn
              addressTwoEn
              phoneEn
              directEn
              faxEn
              emailDe
              addressDe
              phoneDe
              faxDe
              emailDe
            }
          }
        }
      `}
      render={data => {
        const { frontmatter } = data.markdownRemark
        return(
          <div>
            <Splash full={false} title={frontmatter.title} image={frontmatter.image}/>
            <Container>
              <GoogleMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.2659592814025!2d-114.08125774857608!3d51.0481767794619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe429c134eb%3A0xe45e2d21b7e0515f!2sCentral+European+Petroleum+Ltd!5e0!3m2!1sen!2sca!4v1564940228115!5m2!1sen!2sca" frameborder="0" allowfullscreen></GoogleMap>
              <ContactGrid>
                <div>
                  <Heading>Central European Petroleum Ltd.</Heading>
                  <Description>{frontmatter.addressEn}<br/>{frontmatter.addressTwoEn}</Description>
                  <Description>Phone: {frontmatter.phoneEn}</Description>
                  <Description>Direct: {frontmatter.directEn}</Description>
                  <Description>Fax: {frontmatter.faxEn}</Description>
                  <Description>Email: {frontmatter.emailEn}</Description>
                </div>
                <div>
                  <Heading>CEP Central European Petroleum GmbH</Heading>
                  <Description>{frontmatter.addressDe}</Description>
                  <Description>Phone: {frontmatter.phoneDe}</Description>
                  <Description>Fax: {frontmatter.faxDe}</Description>
                  <Description>Email: <a href='mailto:${frontmatter.emailDe}'></a>{frontmatter.emailDe}</Description>
                </div>
              </ContactGrid>
            </Container>
          </div>
        )
      }}
    />
  )
}

export default ContactPage
