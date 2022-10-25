import React from 'react'
import s from './index.module.css'

export default function Request() {
  return (
    <section className={s.request_section}>
        <div className={['wrapper', s.request_block].join(' ')}>
            <h2>САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
            <h3>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</h3>
            <button>ВАШ ЗАПРОС</button>
        </div>
    </section>
  )
}
