import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ModernSolutions from '../components/ModernSolutions'
import Partners from '../components/Partners'
import WhatWeDo from '../components/WhatWeDo'
import CTABanner from '../components/CTABanner'
import SeedToHarvest from '../components/SeedToHarvest'
import News from '../components/News'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ModernSolutions />
      <Partners />
      <WhatWeDo />
      <CTABanner />
      <SeedToHarvest />
      <News />
      <Footer />
    </div>
  )
}

export default Home
