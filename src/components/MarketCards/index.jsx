import React from 'react'
import s from './index.module.css'

export default function MarketCards({value, title, text}) {
  return (
    <div className={s.card_item}>
      <p className={s.value}>{ value }</p>
      <p className={s.title}>{ title }</p>
      <p className={s.text}>{ text }</p>
    
    </div>
  )
}
