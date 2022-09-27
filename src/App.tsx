import React from 'react'
import './App.scss'
import './styles/reset.scss'
import { Header } from './components/Header/Header'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
