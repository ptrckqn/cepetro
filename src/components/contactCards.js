import React from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"

const Container = styled.section`
  margin-bottom: 5rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
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
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`

const List = styled.ul`
  padding: 3rem;
  font-size: 1.6rem;
  list-style: none;
`

const Item = styled.li`
  a {
    color: #ff4a53;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const ContactCards = ({ data }) => {
  const toHtml = toHtml => {
    const parsedData = remark()
      .use(remarkHtml)
      .processSync(toHtml)
      .toString()
    return { __html: parsedData }
  }
  return (
    <Container>
      <GridContainer>
        {data &&
          data.map(({ title, data }, count) => (
            <Box key={count}>
              <Tertiary>{title}</Tertiary>
              <List>
                {data &&
                  data.map((item, count) => (
                    <Item key={count} dangerouslySetInnerHTML={toHtml(item)} />
                  ))}
              </List>
            </Box>
          ))}
      </GridContainer>
    </Container>
  )
}

export default ContactCards
