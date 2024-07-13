import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'

//UI Components
import IconCloud from '../ui/IconCloud'
import { MagicCard, MagicContainer } from '../ui/MagicCard'
import NumberTicker from '../ui/NumberTicker'
import Marquee from '../ui/Marquee'
import Spotlight from '../ui/Spotlight'
import { FlipWords } from '../ui/flip-words'
import AnimatedGradientText from '../ui/AnimatedGradientText'

//Images
import Grid6BG from '../../img/grid.svg'
import Grid7 from '../../img/b5.svg'
import aboutBG from '../../img/about-grid.svg'
import DP from '../../img/dp.png'
import cardVideo from '../../img/cards-video.webm'

//CV
import CV from '../../cv/Fazeel Nizam - CV.pdf'

//Icons
import { HiMiniFlag, HiSquare3Stack3D } from 'react-icons/hi2'
import { PiCrownSimpleFill, PiShootingStarDuotone } from 'react-icons/pi'
import { GiEmptyHourglass, GiSpanner } from 'react-icons/gi'
import { IoRocket } from 'react-icons/io5'
import {
  FaBehance,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaWhatsappSquare,
} from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { FaClock, FaLocationDot } from 'react-icons/fa6'
import { MdOutlineLanguage } from 'react-icons/md'
import { GrTechnology } from 'react-icons/gr'

//Data Imports
import { languages, softwares, aboutWords, aboutSlugs } from '../../data/data'

const About = () => {
  return (
    <section className="aboutWrapper" id="about">
      <motion.div className="videoContainer">
        <video
          className="video"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src={cardVideo}
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
          <MagicCard className="item  text-sm">
            {/* <BorderBeam size={350} duration={10} delay={9} /> */}
            <div className="topContainer flex justify-between gap-[2%] w-[100%] h-[45%] flex-row">
              <div className="topImgContainer w-[auto] h-[100%]">
                <img src={DP} alt="dp" className="h-[100%] aspect-square" />
              </div>
              <div className="topNameContainer w-[100%] h-[100%] flex flex-col justify-between text-[#ffffffcb] pl-3">
                <span className="availableTab flex flex-row align-middle">
                  <div></div>
                  <p>Available To Work</p>
                </span>
                <div className="flex h-[50%] w-[100%] flex-col justify-between">
                  <span className="name text-3xl text-white">Fazeel Nizam</span>
                  <div>
                    <span>I'm A</span>
                    <span>
                      <FlipWords color="#9100f9" words={aboutWords} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="topButtonContainer w-[100%] h-[100%] flex justify-end text-[#ffffffcb] ">
                <a
                  href={CV}
                  download
                  className="flex flex-row justify-end align-middle gap-3"
                >
                  <p>Resume</p>
                  <span>
                    <FaDownload />
                  </span>
                </a>
              </div>
            </div>
            <div className="midleContainer flex w-[100%] h-[25%] flex-wrap">
              <span className="midleTab flex flex-row align-middle">
                <FaLocationDot />
                <p>Sri Lanka</p>
              </span>
              <span className="midleTab flex flex-row align-middle">
                <FaClock />
                <p>IST</p>
              </span>
              <span className="midleTab flex flex-row align-middle">
                <FaGraduationCap />
                <p>Open University</p>
              </span>
              <span className="midleTab flex flex-row align-middle">
                <GrTechnology />
                <p>Electronic Engineer Intern</p>
              </span>
              <span className="midleTab flex flex-row align-middle">
                <MdOutlineLanguage />
                <p>Sinhala, English & Tamil</p>
              </span>
            </div>
            <div className="bottomContainer flex justify-between gap-[2%] w-[100%] h-[20%] flex-row flex-wrap">
              <a
                href="https://wa.me/+94768114000"
                target="_blank"
                rel="noreferrer"
                className="socialLink w-[48%] h-[100%] flex flex-row justify-center"
              >
                <span>
                  <FaWhatsapp />
                </span>
                <p>Whatsapp Me</p>
              </a>
              <a
                href="http://m.me/FazeelNizam00"
                target="_blank"
                rel="noreferrer"
                className="socialLink w-[48%] h-[100%] flex flex-row justify-center"
              >
                <span>
                  <FaFacebook />
                </span>
                <p>DM Me (Facebook)</p>
              </a>
            </div>
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
                      <figure>
                        <img
                          src={scard.svg}
                          alt={scard.text}
                          className="w-[60%]"
                        />
                      </figure>
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
                  {languages.map((lcard) => (
                    <div className="slidingCard" key={lcard.text}>
                      <figure>
                        <img
                          src={lcard.svg}
                          alt={lcard.text}
                          className="w-[60%]"
                        />
                      </figure>
                      <span>{lcard.text}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="iconCloud">
              <IconCloud iconSlugs={aboutSlugs} />
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
              className="socialLink"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
            >
              <figure>
                <FaLinkedin />
              </figure>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.behance.net/fazeelnizam/projects"
              className="socialLink"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <FaBehance />
              </figure>
              <span>Behance</span>
            </a>
            <a
              href="https://web.facebook.com/FazeelNizam00"
              className="socialLink"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
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
