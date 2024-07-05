import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import BlackHole from '../../img/blackhole.webm'
import '@primer/react-brand/lib/css/main.css'
import { Bento } from '@primer/react-brand'
import IconCloud from '../ui/IconCloud'
import { RevealBento } from './BentoGrid'

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

const About = () => {
  return (
    <section className="aboutWrapper" id="about">
      {/* <IconCloud iconSlugs={slugs} /> */}
      <video autoPlay muted loop className="video">
        <source src={BlackHole} type="video/webm" />
      </video>
      <div className="bentoContainer">
        {/* <Bento>
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 6,
            }}
            rowSpan={{
              xsmall: 4,
              large: 4,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 2,
            }}
            rowSpan={{
              xsmall: 4,
              large: 2,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 2,
            }}
            rowSpan={{
              xsmall: 4,
              large: 2,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 2,
            }}
            rowSpan={{
              xsmall: 4,
              large: 2,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 6,
            }}
            rowSpan={{
              xsmall: 4,
              large: 4,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 3,
            }}
            rowSpan={{
              xsmall: 4,
              large: 3,
            }}
            rowStart={{
              large: 5,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 3,
            }}
            rowSpan={{
              xsmall: 4,
              large: 5,
            }}
          />
          <Bento.Item
            columnSpan={{
              xsmall: 12,
              small: 6,
              large: 6,
            }}
            rowSpan={{
              xsmall: 4,
              large: 3,
            }}
          />
        </Bento> */}
        {/* <div className="bento-container">
          <div className="bento-grid">
            <div className="item item-1">1</div>
            <div className="item item-2">2</div>
            <div className="item item-3">3</div>
            <div className="item item-4">4</div>
            <div className="item item-5">5</div>
            <div className="item item-6">6</div>
          </div>
        </div> */}
        <div className="grid">
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
      {/* <h1>About Me</h1>
      <div>
        I am a creative explorer, blending the worlds of code and design. As a
        computer engineering undergraduate, web developer, graphic designer,
        illustrator, and software engineer, I bring ideas to life in the digital
        realm. My portfolio is a testament to innovation and imagination,
        showcasing the wonders I create at the intersection of technology and
        art. Welcome to my universe.
      </div> */}
    </section>
  )
}

export default About
