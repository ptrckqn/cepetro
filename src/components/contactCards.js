import React from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"

const Container = styled.section`
  background-color: #f7f7f7;
  padding: 25rem 0 15rem 0;
  margin-top: -20vh;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  align-items: center;
  justify-items: center;
  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
  }
`

const Box = styled.div`
  width: 80%;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 2rem;
  max-width: 50rem;
`

const Tertiary = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`

const Paragraph = styled.p`
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
  font-size: 1.6rem;
`

const Content = styled.span`
  font-weight: 300;
  text-align: left;
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  hr {
    margin: 1rem 3rem;
  }
  h1,
  h2,
  p {
    padding: 0.5rem 0;
  }
  a {
    color: #ff4a53;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  blockquote {
    border-left: 1px solid #777;
    padding-left: 2rem;
  }
  img {
    max-width: 100%;
    object-fit: contain;
  }
  ul,
  ol {
    padding-left: 2rem;
  }
`

const ContactCards = props => {
  const contactDe = remark()
    .use(remarkHtml)
    .processSync(props.contactDe)
    .toString()
  const contactPl = remark()
    .use(remarkHtml)
    .processSync(props.contactPl)
    .toString()
  const contactNl = remark()
    .use(remarkHtml)
    .processSync(props.contactNl)
    .toString()
  const createHTML = toHtml => {
    return { __html: toHtml }
  }
  return (
    <Container>
      <GridContainer>
        <Box>
          <Tertiary>{props.titleNl}</Tertiary>
          <Paragraph>
            <Content dangerouslySetInnerHTML={createHTML(contactNl)} />
          </Paragraph>
        </Box>
        <Box>
          <Tertiary>{props.titleDe}</Tertiary>
          <Paragraph>
            <Content dangerouslySetInnerHTML={createHTML(contactDe)} />
          </Paragraph>
        </Box>
        <Box>
          <Tertiary>{props.titlePl}</Tertiary>
          <Paragraph>
            <Content dangerouslySetInnerHTML={createHTML(contactPl)} />
          </Paragraph>
        </Box>
      </GridContainer>
    </Container>
  )
}

export default ContactCards
