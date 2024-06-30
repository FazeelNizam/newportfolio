import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import Banner from './components/Banner/Banner'
import { FlipWords } from './components/ui/flip-words'
import SlidingText from './components/SlidingText/SlidingText'

const App = () => {
  const words = ['Fazeel', 'cute', 'beautiful', 'modern']
  return (
    <div>
      <Navbar />
      <Banner />
      <SlidingText />
      <section className="test" id="skills">
        <FlipWords words={words} />
      </section>
      <section className="test" id="projects">
        test 2
      </section>
      <section className="test" id="contact">
        test 3
      </section>
    </div>
  )
}

export default App
