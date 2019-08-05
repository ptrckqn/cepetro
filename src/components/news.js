import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const NewsItem = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  cursor: pointer;
  background: ${props => `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), black url(${props.background}) center/cover no-repeat`};
  height: 15vh;
  color: #fff;
  p{
    padding: 10px;
    margin: 0;
  }
  h3{
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 10px;
    right: 0;
    position: absolute;
    bottom: 0;
    text-align: right;
  }
`

const NewsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const NewsLink = styled(Link)`
  @media screen and (max-width: 767px){
    width: 100%;
    flex: 1 0 80%;
    margin: 30px 0;
  }
  @media screen and (min-width: 768px){
    width: 31%;
    flex: 1 0 33.333%;
    margin: 30px;
  }
  position: relative;
`


class News extends Component{
  constructor(props){
    super(props)
    this.state = {
      short: this.props.short
    }
  }
  render(){
    return(
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
                    date(formatString: "MMMM Do, YYYY")
                  }
                }
              }
            }
          }
          `}
          render={ (data, count) => {
            var { edges: posts } = data.allMarkdownRemark
            if(this.state.short){
              posts = posts.slice(0, 2)
            }
            return(
              <NewsContainer >
                {posts && posts.map(({ node: post }) => (
                  <NewsLink to={post.fields.slug} key={post.id}>
                    <NewsItem background={post.frontmatter.image}>
                      <p>{post.frontmatter.date}</p>
                      <h3>{post.frontmatter.title}</h3>
                    </NewsItem>
                  </NewsLink>
                ))}
              </NewsContainer>
            )
          }}
        />
      )
    }
  }

export default News
