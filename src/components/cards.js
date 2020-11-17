import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Container = styled.section`
  padding: 10rem 0;
`

const HeadingBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Secondary = styled.h2`
  display: inline-block;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    rgb(64, 162, 255),
    rgb(41, 108, 171)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 56.25em) {
    font-size: 3rem;
  }
  @media (max-width: 37.5em) {
    font-size: 2.25em;
  }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 50%;
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
  @media (max-width: 56.25em) {
    width: 90% !important;
  }
`

const Box = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 56.25em) {
    height: 40rem;
  }
  @media only screen and (max-width: 37.5em) {
    height: 52rem;
  }
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
    @media only screen and (max-width: 56.25em){
        height: 40rem;
    }
    @media only screen and (max-width: 37.5em){
        height: 52rem;
    }
`

const Front = styled(Side)`
  background-color: #fff;
  ${Box}:hover & {
    transform: rotateY(-180deg);
  }
`

const Back = styled(Side)`
  transform: rotateY(180deg);
  background-image: linear-gradient(to right bottom, #ff4a53, #ba2d34);
  ${Box}:hover & {
    transform: rotateY(0);
  }
`

const Photo = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  height: 28rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`

const Title = styled.h4`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #777;
  position: absolute;
  top: 27.5rem;
  right: 2rem;
  padding: 1rem;
  text-align: right;
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
  font-size: 1.75rem;
  font-weight: 100;
`

const Btn = styled(Link)`
  margin-top: 6rem;
  background-color: #fff;
  color: #777;
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }
  &::after {
    background-color: #fff;
  }
`

const Card = ({ hero, image, title, date, url }) => {
  let img
  if (image) {
    img = image.childImageSharp.fluid
  } else if (hero) {
    img = hero.childImageSharp.fluid
  }

  return (
    <Section>
      <Box>
        <Front>
          {img && <Photo fluid={img}>&nbsp;</Photo>}

          <Title>
            <span>{title}</span>
          </Title>
          <Info>{date}</Info>
        </Front>
        <Back>
          <Cta>
            <CtaBox>
              <Btn to={url}>Continue Reading</Btn>
            </CtaBox>
          </Cta>
        </Back>
      </Box>
    </Section>
  )
}

const Cards = ({ data: { title }, short, category }) => {
  return (
    <Container>
      <HeadingBox>{title && <Secondary>{title}</Secondary>}</HeadingBox>
      <StaticQuery
        query={graphql`
          query newsPostsQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "news-post" } } }
              sort: { fields: frontmatter___date, order: DESC }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    publish
                    title
                    image {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    hero {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    category
                    date(formatString: "MMM Do, YYYY")
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark: { edges } }) => {
          if (short) {
            edges = edges.slice(0, 3)
          }
          return (
            <FlexContainer>
              {edges &&
                edges.map(({ node }) => {
                  if (!category && node.frontmatter.publish) {
                    return (
                      <Card
                        key={node.id}
                        hero={node.frontmatter.hero}
                        image={node.frontmatter.image}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        url={node.fields.slug}
                      />
                    )
                  } else if (
                    node.frontmatter.category === category &&
                    node.frontmatter.publish
                  ) {
                    return (
                      <Card
                        key={node.id}
                        hero={node.frontmatter.hero}
                        image={node.frontmatter.image}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        url={node.fields.slug}
                      />
                    )
                  } else {
                    return null
                  }
                })}
            </FlexContainer>
          )
        }}
      />
    </Container>
  )
}

export default Cards
