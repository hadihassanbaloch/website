// src/pages/MainPage.jsx
import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from './Services'
import Projects from './Projects'
import Clients from './Clients'
import Stats from './Stats'
import Testimonials from './Testimonials'
import Teams from './Teams'
import Pricing from './Pricing'
import  Contact from './Contact'
// (We’ll add Projects, About, Contact later)

export default function MainPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Persistent animated background and navbar */}
      <ParticlesBackground />
      {/* Scrollable sections stack */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-[10px] pt-12"> 
        <Navbar />
        <Hero />
        <Services />
      </div>
      <Projects />
      <div className="relative z-10 mx-auto max-w-screen-xl px-[10px] pt-12">
        <Clients />
      </div>
      <Stats />
      <Testimonials />
      <Teams />
      <Pricing />
      <Contact />
    </div>
  )
}
