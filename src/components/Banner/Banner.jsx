import React, { useEffect, useRef } from 'react'
import './Banner.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
// import FancyText from '@carefully-coded/react-text-gradient'

import Hero1 from '../../img/Hero/hero_f.png'
import Hero2 from '../../img/Hero/hero_b.png'
import Hero3 from '../../img/Hero/l.png'
import Hero4 from '../../img/Hero/r.png'
import { FlipWords } from '../ui/flip-words'

const Banner = () => {
  const ref = useRef()
  const words = [
    'Computer Engineer',
    'Software Engineer',
    'Frontend Developer',
    'Web Developer',
    'Graphic Designer',
  ]

  const floatingAnimationRight = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  }

  const floatingAnimationLeft = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  }

  const sliderVarients = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 20,
      },
    },
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const sky = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const front = useTransform(scrollYProgress, [0, 1], ['0%', '3%'])
  const back = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const text = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const text2 = useTransform(scrollYProgress, [0, 1], ['0%', '1900%'])

  // useEffect(() => {
  //   const textContainer = document.querySelector('.slidingText')
  //   const spans = textContainer.querySelectorAll('span')

  //   // Clone the spans to create a continuous loop
  //   spans.forEach((span) => {
  //     const clone = span.cloneNode(true)
  //     textContainer.appendChild(clone)
  //   })
  // }, [])

  return (
    <section id="home" ref={ref} className="wrapper">
      <motion.div style={{ x: sky }} className="sky-container">
        <div class="star1"></div>
        <div class="star2"></div>
        <div class="star3"></div>
      </motion.div>
      <motion.div className="content">
        <motion.div className="imageContainer">
          <motion.img
            style={{ y: back }}
            src={Hero2}
            alt="Back Layer"
            className="backLayer"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 80 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.div style={{ y: text }} className="heroHeading">
            {/* <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
              Fazeel Nizam
            </LinearGradient> */}

            {/* <FlipWords words={words} /> */}
            {/* <FancyText
                gradient={{ from: '#4158D0', to: '#FFCC70' }}
                animateTo={{ from: '#FFCC70', to: '#4158D0' }}
                animateDuration={5000}
              >
                Hey, I'm
              </FancyText> */}
            <motion.span
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 90 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Hey, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 80 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Fazeel Nizam
            </motion.span>
          </motion.div>
          <motion.div
            style={{ y: text2 }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 80 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bannerFlipText"
          >
            <FlipWords words={words} />
          </motion.div>
          {/* <motion.div style={{ y: text }} className="textContainer">
            <div className="slidingTextContainer">
              <motion.div
                className="slidingText"
                initial={{ opacity: 0, y: 280 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 280 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <span>WEB DESIGNER</span>
                <span>FRONT END DEVELOPER</span>
                <span>GRAPHIC DESIGNER</span>
                <span>ENGINEER</span>
              </motion.div>
            </div>
          </motion.div> */}
          <motion.div
            style={{ y: front }}
            className="frontLayer"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="frontImgContainer">
              <img src={Hero1} alt="Front Layer" className="front" />
            </motion.div>
            <motion.img
              alt="Floating Right"
              className="floating-right"
              src={Hero4}
              animate={floatingAnimationRight}
            />
            <motion.img
              src={Hero3}
              alt="Floating left"
              className="floating-left"
              animate={floatingAnimationLeft}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Banner
