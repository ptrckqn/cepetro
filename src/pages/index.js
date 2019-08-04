import React, { Component } from "react"

import Layout from "../components/layout"
import Footer from '../components/footer'
import './styles.css'
import NavBar from '../components/navbar'


class IndexPage extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <Layout />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
