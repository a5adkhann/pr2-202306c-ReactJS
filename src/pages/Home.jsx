import React from 'react'
import Slideshow from '../components/Slideshow'
import DataCards from '../components/DataCards'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <>
      <Slideshow/>

      <DataCards/>

      <AboutSection/>

      <ContactSection/>
    </>
  )
}

export default Home
