import React from 'react'
import { projects } from '../../data/projects'
import Projects from '../Projects'
import s from './index.module.css'

export default function ProjectsCards() {
  return (
   <section className={s.projects_block}> 
     <div>
      <h2 className={s.text}> НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ </h2>
     </div>

    <div className={s.achievements_cards}>
    {
        projects.map(el => <Projects key={el.id} {...el} />)
    }
    </div>
    </section>
  )
}
