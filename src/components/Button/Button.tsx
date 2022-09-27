import React from 'react'
import './Button.scss'

interface Props {
  type: 'yellow' | 'grey'
  size: 'small' | 'big'
  name: string
}

export const Button: React.FC<Props> = ({
  type,
  size,
  name
}) => {
  return (
    <button className={`button ${type} ${size}`}>
      {name}
    </button>
  )
}
