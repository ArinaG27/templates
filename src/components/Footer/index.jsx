import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={['wrapper', s.footer].join(' ')}>
        <div>
        <p className={s.p1}>© 2019 Строительная компания</p>
        <p className={s.p2}>Разработано лучшей студей</p>
        </div>
    </footer>
  )
}
