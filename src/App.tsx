import React from 'react'
import './App.scss'
import './styles/reset.scss'
import { Header } from './components/Header/Header'
import { Candidates } from './components/Candidates'
import { Form } from './components/Form/Form'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Candidates />
        <Form />
      </main>
    </div>
  )
}

export default App
