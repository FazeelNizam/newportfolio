import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import './About.scss'
import BlackHole from '../../img/blackhole.webm'
import Grid6BG from '../../img/grid.svg'
// import Grid6 from '../../img/b4.svg'
import Grid7 from '../../img/b5.svg'
import IconCloud from '../ui/IconCloud'
import BorderBeam from '../ui/BorderBeam'
import ShineBorder from '../ui/ShineBorder'
import { MagicCard, MagicContainer } from '../ui/MagicCard'
import NumberTicker from '../ui/NumberTicker'
import { HiMiniFlag, HiSquare3Stack3D } from 'react-icons/hi2'
import AnimatedGradientText from '../ui/AnimatedGradientText'
import { PiCrownSimpleFill, PiShootingStarDuotone } from 'react-icons/pi'
import { RiHourglassFill } from 'react-icons/ri'
import { GiEmptyHourglass, GiSpanner } from 'react-icons/gi'
import Marquee from '../ui/Marquee'
import Vortex from '../ui/Vortex'
import { LampContainer } from '../ui/Lamp'
import { IoRocket } from 'react-icons/io5'
import {
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

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
  'python',
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
        {/* <video autoPlay muted loop className="video">
          <source src={BlackHole} type="video/webm" />
        </video> */}
        <Vortex
          rangeY={600}
          particleCount={2000}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        />
      </motion.div>
      <div className="bentoContainer">
        <MagicContainer className="grid">
          {/* Container 01 */}
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

          {/* Container 02 */}
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

          {/* Container 03 */}
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

          {/* Container 04 */}
          <MagicCard className="item">
            {/* <BorderBeam size={350} duration={10} delay={9} /> */}4
          </MagicCard>

          {/* Container 05 */}
          <MagicCard className="item">
            <h1 className="bottomText">
              <HiSquare3Stack3D />
              My Tech Stack
            </h1>
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

          {/* Container 06 */}
          <MagicCard className="item">
            <img className="absolute bg-cover" src={Grid6BG} alt="grid6BG" />
            {/* <img
              className="absolute w-[65%] bottom-0 right-[5%] opacity-80"
              src={Grid6}
              alt="grid6"
            /> */}
            <figure>
              <FaGraduationCap />
            </figure>
            <span className="bottomText">
              <p>Computer Engineering</p>
              <p>Undergraduate</p>
            </span>
          </MagicCard>

          {/* Container 07 */}
          <MagicCard className="item">
            <img
              className="absolute w-[70%] bottom-0 right-0 opacity-80"
              src={Grid7}
              alt="grid7"
            />
            <span className="bottomText">
              <p>Tech Enthusiast With </p>
              <p>Passion For Development</p>
            </span>
          </MagicCard>

          {/* Container 08 */}
          <MagicCard className="item">
            <h1 className="bottomText">
              <IoRocket />
              Follow Me
            </h1>
            <a href="#" className="socialLink">
              <figure>
                <FaGithub />
              </figure>
              <span>GitHub</span>
            </a>
            <a href="#" className="socialLink">
              <figure>
                <FaLinkedin />
              </figure>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="socialLink">
              <figure>
                <FaFacebook />
              </figure>
              <span>Facebook</span>
            </a>
            <a href="#" className="socialLink">
              <figure>
                <FaInstagram />
              </figure>
              <span>Instagram</span>
            </a>
          </MagicCard>

          {/* Container 09 */}
          <MagicCard className="item">
            <figure>
              <PiCrownSimpleFill />
            </figure>
            <span className="bottomText">
              <p>Let’s Work Together</p>
              <p>Let's Make Magic Happen Together!</p>
            </span>

            <a href="#" className="socialLink">
              <span>
                <BiLogoGmail />
              </span>
              <p>Email Me</p>
            </a>
          </MagicCard>
        </MagicContainer>
      </div>
    </section>
  )
}

export default About
