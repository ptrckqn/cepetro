import React from 'react'
import LandingPage from '../templates/landing-page'
import AboutPage from '../templates/about-page'
import Responsibility from '../templates/responsibility-page'
import NewsPage from '../templates/news-page'
import NewsPost from '../templates/news-post'
import ContactPage from '../templates/contact-page'

const Layout = () => {
  return(
    <div>
      <LandingPage/>
      <AboutPage/>
      <Responsibility/>
      <NewsPage/>
      <NewsPost/>
      <ContactPage/>
    </div>
  )
}

export default Layout
