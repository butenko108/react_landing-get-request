/* eslint-disable */
import React from 'react'
import CoverImg from '../../images/photo-cover.svg'
import './CandiCard.scss'

export const CandiCard: React.FC = () => {
  return (
    <article className='candidate'>
      <img className='candidate__img' src={CoverImg} />
      <p className='candidate__name text-cut' >Name</p>
      <p className='candidate__position text-cut' >Position</p>
      <p className='candidate__email text-cut' >Email</p>
      <p className='candidate__phone text-cut' >Phone</p>
    </article>
  )
}
