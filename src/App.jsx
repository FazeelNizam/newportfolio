import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Projects />
    </div>
  )
}

export default App
