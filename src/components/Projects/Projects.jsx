import BoxReveal from '../ui/BoxReveal'
import IconCloud from '../ui/IconCloud'
import styles from './Project.module.scss'

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

const Projects = () => {
  return (
    <div className={styles.container}>
      <BoxReveal boxColor={'#5046e6'} duration={0.5}>
        <h1>Projects</h1>
      </BoxReveal>
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}

export default Projects
