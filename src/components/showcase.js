import React, { Component } from "react"
import styled from "styled-components"
import remark from "remark"
import remarkHtml from "remark-html"

const Container = styled.section`
  background-color: #f7f7f7;
  overflow: hidden;
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

const Images = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 56.25em) {
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
  transition: all 0.5s;
  @media only screen and (max-width: 56.25em) {
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 56.25em) {
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
`

const Default = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  margin: 5rem auto;
  transition: all 0.5s;
  @media only screen and (max-width: 56.25em) {
    width: 85%;
  }
`

const Section = styled.div`
  margin: 5rem auto;
  position: absolute;
  width: 60%;
  transition: all 0.5s;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  @media only screen and (max-width: 56.25em) {
    width: 85%;
  }
`

const Germany = styled(Section)`
  transform: translateX(-150%);
`

const Poland = styled(Section)`
  transform: translateX(150%);
`

// Used to ensure the height of the container fits all of the absolute content
const HiddenContent = styled.div`
  visibility: hidden;
  margin: 5rem auto 10rem;
  width: 60%;
  @media only screen and (max-width: 56.25em) {
    width: 85%;
  }
`

const Content = styled.div`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  font-weight: 300;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
  }
  h2 {
    font-weight: 400;
    text-transform: uppercase;
  }
  h1,
  h2,
  p {
    padding: 0.5rem 0;
  }
  hr {
    margin: 1rem 3rem;
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

class Showcase extends Component {
  constructor() {
    super()
    this.state = {
      view: "default",
    }

    this.toggleGermany = this.toggleGermany.bind(this)
    this.togglePoland = this.togglePoland.bind(this)
  }

  componentDidMount() {
    if (this.props.location) {
      this.setState({ view: this.props.location.view })
    }
  }

  toggleGermany() {
    if (this.state.view === "germany") {
      this.setState({ view: "default" })
    } else {
      this.setState({ view: "germany" })
    }
  }

  togglePoland() {
    if (this.state.view === "poland") {
      this.setState({ view: "default" })
    } else {
      this.setState({ view: "poland" })
    }
  }

  render() {
    const germanyOps = remark()
      .use(remarkHtml)
      .processSync(this.props.germanyOps)
      .toString()
    const polandOps = remark()
      .use(remarkHtml)
      .processSync(this.props.polandOps)
      .toString()
    const createHTML = toHtml => {
      return { __html: toHtml }
    }
    const hideDefault = {
      opacity: "0",
      visibility: "hidden",
    }

    const showView = {
      opacity: "1",
      transform: "translateX(-50%)",
      visibility: "visible",
    }

    return (
      <Container>
        <HeadingBox>
          <Secondary>{this.props.heading}</Secondary>
        </HeadingBox>
        <Images>
          <ImageBox
            image={this.props.germanyImage}
            onClick={this.toggleGermany}
            style={{ width: this.state.view === "germany" ? "90%" : "" }}
          >
            <HoverView>
              <ViewMore>
                {this.state.view !== "germany"
                  ? this.props.germanyText
                  : "Go back"}
              </ViewMore>
            </HoverView>
          </ImageBox>
          <ImageBox
            image={this.props.polandImage}
            onClick={this.togglePoland}
            style={{ width: this.state.view === "poland" ? "90%" : "" }}
          >
            <HoverView>
              <ViewMore>
                {this.state.view !== "poland"
                  ? this.props.polandText
                  : "Go back"}
              </ViewMore>
            </HoverView>
          </ImageBox>
        </Images>
        <Contents>
          <Default style={this.state.view === "default" ? {} : hideDefault}>
            <Content dangerouslySetInnerHTML={createHTML(this.props.default)} />
          </Default>
          <Germany style={this.state.view === "germany" ? showView : {}}>
            <Content dangerouslySetInnerHTML={createHTML(germanyOps)} />
          </Germany>
          <Poland style={this.state.view === "poland" ? showView : {}}>
            <Content dangerouslySetInnerHTML={createHTML(polandOps)} />
          </Poland>
          {this.state.view === "default" ? (
            <HiddenContent
              dangerouslySetInnerHTML={createHTML(this.props.default)}
            />
          ) : null}
          {this.state.view === "germany" ? (
            <HiddenContent dangerouslySetInnerHTML={createHTML(germanyOps)} />
          ) : null}
          {this.state.view === "poland" ? (
            <HiddenContent dangerouslySetInnerHTML={createHTML(polandOps)} />
          ) : null}
        </Contents>
      </Container>
    )
  }
}
export default Showcase
