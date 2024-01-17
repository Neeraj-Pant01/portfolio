import React from 'react'
import "./App.css"
import Homepage from './pages/homepag/Homepage';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';

const App = () => {
  // const spanNumber = 20;
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
