import { TypewriterEffectSmooth } from '../ui/TypeWriter'
import styles from './Project.module.scss'

const words = [
  {
    text: 'Projects',
  },
  {
    text: '&',
  },
  {
    text: 'Designs',
  },
  {
    text: 'Sections',
  },
  {
    text: 'Will',
  },
  {
    text: 'Land',
  },

  {
    text: 'Here',
  },
  {
    text: 'Soon',
  },
]

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <TypewriterEffectSmooth words={words} />
    </section>
  )
}

export default Projects
