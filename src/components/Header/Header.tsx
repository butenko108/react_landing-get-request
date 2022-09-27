import React from 'react'
import LogoSvg from '../../images/Logo.svg'
import { Button } from '../Button/Button'
import './Header.scss'
import '../../styles/container.scss'
import '../../styles/utils/_mixins.scss'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container-white'>
        <div className='container'>
          <nav className='header__nav'>
            <a href='/' className='header__logo'>
              <img className='header__logo-img' src={LogoSvg} alt='Logo test assignment' />
            </a>

            <div className='header__actions'>
              <Button type='yellow' size='small' name='Users' />
              <Button type='yellow' size='small' name='Sign up' />
            </div>
          </nav>
        </div>

      </div>
      <div className='header__background'>
        <div className='header__content'>
          <h1 className='header__title'>
            Test assignment for front-end developer
          </h1>

          <p className='header__description'>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
          </p>

          <Button type='yellow' size='small' name='Sign up' />
        </div>
      </div>
    </header>
  )
}
