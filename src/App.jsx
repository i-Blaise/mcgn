import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import ScrollUpButton from './components/ScrollUpButton.jsx'
import About from './pages/About.jsx'
import GetInvolved from './pages/GetInvolved.jsx'

export default function App() {
  return (
    <>
    <ScrollUpButton />

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Router>
    </>
  );
}