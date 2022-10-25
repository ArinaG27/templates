import React from 'react'
import s from './index.module.css'
import { market } from '../../data/market'
import MarketCards from '../MarketCards'

export default function Novbar() {
  return (
    <section className={s.top_section}>
        <div className={['wraper', s.top_block].join(' ')}>

            <div className={s.top}>
                <h2>Реализуем крупнейшие <br /> проекты в России </h2>
                <p>стадионы, газопроводы, мосты, дамбы</p>
            </div>

            <div className={s.market_cards}>
            {
              market.map(el => <MarketCards key={el.id} {...el} />)
            }
            </div>


        </div>

      
    </section>
  )
}
