import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './page/HomePage'
import ContactPage from './page/ContactPage'
import AllReciepes from './page/AllReciepes'
import ShowMealPage from './page/ShowMealPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/allreciepes" element={<AllReciepes />} />
        <Route path="/showmeal/:id" element={<ShowMealPage />} />
      </Routes>
    </BrowserRouter>
  )  
}

export default App
