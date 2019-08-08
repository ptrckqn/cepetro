import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.footer`
  -webkit-box-shadow: inset 0 25px 20px -20px rgba(0,0,0,0.3);
  -moz-box-shadow: inset 0 25px 20px -20px rgba(0,0,0,0.3);
  box-shadow: inset 0 25px 20px -20px rgba(0,0,0,0.3);
  padding-bottom: 2.5vw;
  text-align: center;
  background-color: #bdc3c7;
  width: 100vw;
  margin: 0;
  margin-top: 5vw;
`

const Content = styled.div`
  padding-top: 5vw;
`
const CompanyName = styled.h4`
  font-size: 20px;
  color: #fff;
  padding: 0 3rem;
`

const MainLinks = styled.ul`
  font-size: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0;
`

const SubLinks = styled(MainLinks)`
  margin: 1.5vw auto;
  font-size: 14px;
`

const NavLink = styled.li`
  margin: auto 20px;
  list-style: none;
`

const Footer = ({ data }) => {
  return(
    <Container>
      <Content>
        <StaticQuery
          query={graphql`query footerQuery{site{siteMetadata{title}}}`}
          render={data => <CompanyName>{data.site.siteMetadata.title}</CompanyName>}
        />
        {/* <MainLinks>
          <NavLink><Link to='#'>Link 1</Link></NavLink>
          <NavLink><Link to='#'>Link 2</Link></NavLink>
          <NavLink><Link to='#'>Link 3</Link></NavLink>
        </MainLinks>

        <SubLinks>
          <NavLink><Link to='#'>Link 1</Link></NavLink>
          <NavLink><Link to='#'>Link 2</Link></NavLink>
          <NavLink><Link to='#'>Link 3</Link></NavLink>
        </SubLinks> */}
      </Content>
    </Container>
  )
}
export default Footer
