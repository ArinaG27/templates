import React from 'react'
import img from './media/Rectangle.png'
import s from './index.module.css'



export default function Projects({ title, text}) {
  return (
    <div className={s.card_item}>
    <img src={ img } alt= { title}  />
    <p className={s.title}>{ title }</p>
    <p className={s.text}>{ text }</p>
  </div>
  )
}
