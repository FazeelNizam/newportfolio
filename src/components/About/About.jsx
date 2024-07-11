import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'

//UI Components
import IconCloud from '../ui/IconCloud'
import { MagicCard, MagicContainer } from '../ui/MagicCard'
import NumberTicker from '../ui/NumberTicker'
import Marquee from '../ui/Marquee'

//Images
import Grid6BG from '../../img/grid.svg'
import Grid7 from '../../img/b5.svg'
import aboutBG from '../../img/about-grid.svg'

//Icons
import { HiMiniFlag, HiSquare3Stack3D } from 'react-icons/hi2'
import AnimatedGradientText from '../ui/AnimatedGradientText'
import { PiCrownSimpleFill, PiShootingStarDuotone } from 'react-icons/pi'
import { GiEmptyHourglass, GiSpanner } from 'react-icons/gi'
import { IoRocket } from 'react-icons/io5'
import {
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import Spotlight from '../ui/Spotlight'
import SparklesCore from '../ui/Memeory Drinkers/SparklesCore'

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
  'python',
  'javascript',
  'java',
  'react',
  'python',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'firebase',
  'vercel',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
]

const frameworks = [
  { svg: <HiMiniFlag />, text: 'ReactJs' },
  { svg: <HiMiniFlag />, text: 'NextJs' },
  { svg: <HiMiniFlag />, text: 'Java' },
  { svg: <HiMiniFlag />, text: 'C' },
  { svg: <HiMiniFlag />, text: 'Java Script' },
  { svg: <HiMiniFlag />, text: 'Assembly' },
  { svg: <HiMiniFlag />, text: 'HTML' },
  { svg: <HiMiniFlag />, text: 'SASS' },
  { svg: <HiMiniFlag />, text: 'CSS' },
]

const softwares = [
  { svg: <GiEmptyHourglass />, text: 'Filmora' },
  { svg: <GiEmptyHourglass />, text: 'keil' },
  { svg: <GiEmptyHourglass />, text: 'Ni Multisim' },
  { svg: <GiEmptyHourglass />, text: 'Proteus' },
  { svg: <GiEmptyHourglass />, text: 'Matlab' },
  { svg: <GiEmptyHourglass />, text: 'Illustrator' },
  { svg: <GiEmptyHourglass />, text: 'Figma' },
  { svg: <GiEmptyHourglass />, text: 'Photoshop' },
  { svg: <GiEmptyHourglass />, text: 'AutoCad' },
]

const About = () => {
  return (
    <section className="aboutWrapper" id="about">
      <motion.div className="videoContainer"></motion.div>
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
                    <div className="slidingCard" key={scard.text}>
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
                    <div className="slidingCard" key={fcard.text}>
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
              className="absolute w-[70%] bottom-0 right-0 opacity-90"
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
            <a
              href="https://github.com/FazeelNizam"
              target="_blank"
              className="socialLink"
            >
              <figure>
                <FaGithub />
              </figure>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fazeelnizam/"
              className="socialLink"
              target="_blank"
            >
              <figure>
                <FaLinkedin />
              </figure>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://web.facebook.com/FazeelNizam00"
              className="socialLink"
              target="_blank"
            >
              <figure>
                <FaFacebook />
              </figure>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/fazeel_nizm/"
              className="socialLink"
              target="_blank"
            >
              <figure>
                <FaInstagram />
              </figure>
              <span>Instagram</span>
            </a>
          </MagicCard>

          {/* Container 09 */}
          <MagicCard className="item">
            <div>
              <Spotlight
                className="-top-[5%] left-[1%] w-[100%] h-[100%]"
                fill="#c385f0"
              />
              <Spotlight
                className="left-[22%] top-0 h-[100%] w-[80%]"
                fill="#9200fa"
              />
            </div>
            <figure>
              <PiCrownSimpleFill />
            </figure>
            <span className="bottomText">
              <p>Let’s Work Together</p>
              <p>Let's Make Magic Happen Together!</p>
            </span>

            <a
              href="mailto:nizamfazeel@gmail.com?subject=Message from Portfolio&body=Hi Fazeel\n"
              className="socialLink"
            >
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
