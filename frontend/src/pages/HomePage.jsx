import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Winners from '../components/Winners'
import Transfer from '../components/Transfer'
import Social from '../components/Social'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div>
        <Winners />
        <Transfer />
        <Social />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
