import React from 'react'
import './Button.scss'

interface Props {
  type: string
  name: string
}

export const Button: React.FC<Props> = ({
  type,
  name
}) => {
  return (
    <button className={'button ' + type}>
      {name}
    </button>
  )
}
