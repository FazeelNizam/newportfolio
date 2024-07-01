import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { FiGithub } from 'react-icons/fi'
import { BiHomeAlt2 } from 'react-icons/bi'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineProject } from 'react-icons/ai'
import { TbDeviceMobileMessage } from 'react-icons/tb'
// import logo from '../../../public/img/logo.png'
import './Navbar.scss'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 200 // Adjust to trigger active state sooner

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId)
        }
      })

      setScrolled(window.scrollY > 50)
    }

    const debounceScroll = debounce(handleScroll, 50)
    window.addEventListener('scroll', debounceScroll)

    return () => window.removeEventListener('scroll', debounceScroll)
  }, [])

  const debounce = (func, wait) => {
    let timeout
    return function (...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -80 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div class="navbar" className={scrolled ? 'navbar scrolled' : 'navbar'}>
          <ul class="menu">
            <li class="li">
              <a
                href="#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                <div className="icon">
                  <BiHomeAlt2 size={25} />
                </div>
                <div className="link-container">
                  <span className="label">Home</span>
                </div>
              </a>
            </li>
            <li class="li">
              <a
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                <div className="icon">
                  <GiSkills size={25} />
                </div>
                <div className="link-container">
                  <span className="label">Skills</span>
                </div>
              </a>
            </li>
            <li class="li">
              <a
                href="#projects"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                <div className="icon">
                  <AiOutlineProject size={24} />
                </div>
                <div className="link-container">
                  <span className="label">Projects</span>
                </div>
              </a>
            </li>
            <li class="li">
              <a
                href="#contact"
                className={
                  activeLink === 'contact'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('contact')}
              >
                <div className="icon">
                  <TbDeviceMobileMessage size={24} />
                </div>
                <div className="link-container">
                  <span className="label">Contact</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  )
}

export default NavBar
