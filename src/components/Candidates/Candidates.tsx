import React from 'react'
import { CustomButton } from '../Button'
import { CandiCard } from '../CandiCard'
import './Candidates.scss'

export const Candidates: React.FC = () => {
  return (
    <div className='container'>
      <section className='section'>
        <h1 className='section__title'>
          Working with GET request
        </h1>
        <div className='catalog section__content'>
          <CandiCard />
          <CandiCard />
          <CandiCard />
          <CandiCard />
          <CandiCard />
          <CandiCard />
        </div>
        <div className='section__button'>
          <CustomButton type='yellow' size='big' name='Show more' />
        </div>
      </section>
    </div>
  )
}
