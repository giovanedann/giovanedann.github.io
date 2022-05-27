import React from "react"

import {
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTestinglibrary,
  SiNodedotjs,
  SiExpress,
  SiJest,
  SiPython,
  SiSass,
} from 'react-icons/si'

export const description: string = `
Hello, i'm a Front-End developer based in São Paulo.
Since i finished my degree in Mechanical Engineering, i started to program things in VBA and Excel. After seeing the power of programming, i started learning JavaScript and fell in love with web development, specially Front-End.
`

interface SkillsObject {
  name: string
  svg: React.ReactNode
}

export const skills: Array<SkillsObject> = [
  { name: 'Git', svg: <SiGit className="skill-icon"/> },
  { name: 'HTML', svg: <SiHtml5 className="skill-icon"/> },
  { name: 'CSS', svg: <SiCss3 className="skill-icon"/> },
  { name: 'JavaScript', svg: <SiJavascript className="skill-icon"/> },
  { name: 'TypeScript', svg: <SiTypescript className="skill-icon"/> },
  { name: 'React', svg: <SiReact className="skill-icon"/> },
  { name: 'Redux', svg: <SiRedux className="skill-icon"/> },
  { name: 'Styled Components', svg: <SiStyledcomponents className="skill-icon"/> },
  { name: 'SASS', svg: <SiSass className="skill-icon"/> },
  { name: 'RTL', svg: <SiTestinglibrary className="skill-icon"/> },
  { name: 'NodeJS', svg: <SiNodedotjs className="skill-icon"/> },
  { name: 'ExpressJS', svg: <SiExpress className="skill-icon"/> },
  { name: 'Jest', svg: <SiJest className="skill-icon"/> },
  { name: 'Python', svg: <SiPython className="skill-icon"/> },
]
