import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import './About.scss'
import BlackHole from '../../img/blackhole.webm'
import IconCloud from '../ui/IconCloud'
import BorderBeam from '../ui/BorderBeam'
import ShineBorder from '../ui/ShineBorder'
import { MagicCard, MagicContainer } from '../ui/MagicCard'
import NumberTicker from '../ui/NumberTicker'
import { HiMiniFlag, HiSquare3Stack3D } from 'react-icons/hi2'
import AnimatedGradientText from '../ui/AnimatedGradientText'
import { PiShootingStarDuotone } from 'react-icons/pi'
import { RiHourglassFill } from 'react-icons/ri'
import { GiEmptyHourglass, GiSpanner } from 'react-icons/gi'
import Marquee from '../ui/Marquee'

const slugs = [
  'adobephotoshop',
  'adobe',
  'autocad',
  'wondershare',
  'linux',
  'c',
  'arduino',
  'proteus',
  'multisim',
  'windows',
  'sass',
  //   'typescript',
  'javascript',
  //   'dart',
  'java',
  'react',
  //   'flutter',
  //   'android',
  'html5',
  'css3',
  'nodedotjs',
  //   'express',
  'nextdotjs',
  //   'prisma',
  //   'amazonaws',
  //   'postgresql',
  'firebase',
  //   'nginx',
  'vercel',
  //   'testinglibrary',
  //   'jest',
  //   'cypress',
  //   'docker',
  'git',
  //   'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  //   'androidstudio',
  //   'sonarqube',
  'figma',
]

const frameworks = [
  { id: 1, svg: <HiMiniFlag />, text: 'ReactJs' },
  { id: 2, svg: <HiMiniFlag />, text: 'NextJs' },
  { id: 3, svg: <HiMiniFlag />, text: 'Java' },
  { id: 4, svg: <HiMiniFlag />, text: 'C' },
  { id: 5, svg: <HiMiniFlag />, text: 'Java Script' },
  { id: 6, svg: <HiMiniFlag />, text: 'Assembly' },
  { id: 7, svg: <HiMiniFlag />, text: 'HTML' },
  { id: 8, svg: <HiMiniFlag />, text: 'SASS' },
  { id: 9, svg: <HiMiniFlag />, text: 'CSS' },
]

const softwares = [
  { id: 1, svg: <GiEmptyHourglass />, text: 'Soft 1' },
  { id: 2, svg: <GiEmptyHourglass />, text: 'Soft 2' },
  { id: 3, svg: <GiEmptyHourglass />, text: 'Soft 3' },
  { id: 4, svg: <GiEmptyHourglass />, text: 'Soft 4' },
  { id: 5, svg: <GiEmptyHourglass />, text: 'Soft 5' },
  { id: 6, svg: <GiEmptyHourglass />, text: 'Soft 6' },
  { id: 7, svg: <GiEmptyHourglass />, text: 'Soft 7' },
]

const About = () => {
  return (
    <section className="aboutWrapper" id="about">
      <motion.div className="videoContainer">
        <video autoPlay muted loop className="video">
          <source src={BlackHole} type="video/webm" />
        </video>
      </motion.div>
      <div className="bentoContainer">
        <MagicContainer className="grid">
          <MagicCard className="item whitespace-pre-wrap text-6xl font-medium tracking-tighter">
            <span className="counter">
              <NumberTicker value={100} delay={0.5} /> <p>+</p>
            </span>
            <AnimatedGradientText>
              <span className="bottomText">
                {/* <RiHourglassFill /> */}
                <GiEmptyHourglass />
                Hours of Coding
              </span>
            </AnimatedGradientText>
          </MagicCard>
          <MagicCard className="item whitespace-pre-wrap text-6xl font-medium tracking-tighter">
            <span className="counter">
              <NumberTicker value={19} delay={0.5} /> <p>+</p>
            </span>
            <AnimatedGradientText>
              <span className="bottomText">
                <HiMiniFlag />
                projects
              </span>
            </AnimatedGradientText>
          </MagicCard>
          {/* <ShineBorder
            borderRadius={16}
            className="item"
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          >
            3
          </ShineBorder> */}
          <MagicCard className="item whitespace-pre-wrap text-6xl font-medium tracking-tighter">
            <span className="counter">
              <NumberTicker value={3} delay={0.5} /> <p>+</p>
            </span>
            <AnimatedGradientText>
              <span className="bottomText">
                <PiShootingStarDuotone />
                Year Experience
              </span>
            </AnimatedGradientText>
          </MagicCard>
          <MagicCard className="item">
            {/* <BorderBeam size={150} duration={12} delay={9} /> */}4
          </MagicCard>
          <MagicCard className="item">
            <h1 className="bottomText">
              <HiSquare3Stack3D />
              My Tech Stack
            </h1>
            {/* <div className="slidingCardContainer">
              <div
                className="slidingLeft"
                style={{ '--quantity': softwares.length, '--height': '50px' }}
              >
                {softwares.map((scard) => (
                  <div
                    className="slidingCard"
                    style={{ '--position': scard.id }}
                    key={scard.id}
                  >
                    {scard.svg}
                    <span>{scard.text}</span>
                  </div>
                ))}
              </div>
              <div
                className="slidingRight"
                style={{ '--quantity': frameworks.length, '--height': '50px' }}
              >
                {frameworks.map((fcard) => (
                  <div
                    className="slidingCard"
                    style={{ '--position': fcard.id }}
                    key={fcard.id}
                  >
                    {fcard.svg}
                    <span>{fcard.text}</span>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="slidingCardContainer">
              <div className="slidingLeft">
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                  {softwares.map((scard) => (
                    <div className="slidingCard" key={scard.id}>
                      <figure>{scard.svg}</figure>
                      <span>{scard.text}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="slidingRight">
                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:20s]"
                >
                  {frameworks.map((fcard) => (
                    <div className="slidingCard" key={fcard.id}>
                      <figure>{fcard.svg}</figure>
                      <span>{fcard.text}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="iconCloud">
              <IconCloud iconSlugs={slugs} />
            </div>
          </MagicCard>
          <MagicCard className="item">6</MagicCard>
          <MagicCard className="item">7</MagicCard>
          <MagicCard className="item">8</MagicCard>
          <MagicCard className="item">9</MagicCard>
          {/* <div className="item">
            <IconCloud iconSlugs={slugs} />
          </div> */}
        </MagicContainer>
      </div>
    </section>
  )
}

export default About
