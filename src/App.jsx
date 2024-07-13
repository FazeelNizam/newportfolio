import React, { useState, useEffect } from 'react'
import { quantum } from 'ldrs'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  quantum.register()
  return (
    <div>
      {loading ? (
        <div className="loader w-[100vw] h-[100vh] flex justify-center">
          <l-quantum size="55" speed="1.8" color="#9200fa"></l-quantum>
        </div>
      ) : (
        <>
          <Navbar />
          <Banner />
          <About />
          <Projects />
        </>
      )}
    </div>
  )
}

export default App
