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

  {
    text: '!!!',
  },
]

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <TypewriterEffectSmooth words={words} />
      <span className="text-lg mb-3 mt-4">
        Untill Then Vist My Old Portfolio
      </span>
      <a
        href="https://fazeelnizam.github.io/oldportfolio"
        target="_blank"
        rel="noreferrer"
        className="text-base text-[#9200fa] p-3 pl-4 pr-4 bg-[#7e669c2a] hover:bg-[#8771a142]"
      >
        Fazeel Nizam
      </a>
    </section>
  )
}

export default Projects
