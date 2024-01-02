import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='main-container'>
      <div className='input-container'>
        <div className='personal-input'>Personal Information</div>
        <div className='education-input'>Education</div>
        <div className='experience-input'>Experience</div>
      </div>

      <div className='output-container'>
        <div className='personal-output'>Esto es una sección</div>
        <div className='education-output'>Esto es una sección</div>
        <div className='experience-output'>Esto es una sección</div>

      </div>

    </div>

  )
}

export default App
