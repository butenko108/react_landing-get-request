import React from 'react'
import './App.scss'
import './styles/reset.scss'
import { Header } from './components/Header/Header'
import { Candidates } from './components/Candidates'

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className='section'>
        <Header />
      </div>
      <main>
        <Candidates />
      </main>
    </div>
  )
}

export default App
