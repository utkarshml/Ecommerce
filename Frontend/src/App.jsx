// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Headers from './components/Header.jsx'
import Footer from "../src/components/Footer.jsx"
import Home from "../src/components/Home.jsx"
import Loader from '../src/components/Loader.jsx'
function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Loader/>} />
      </Routes>
     <Footer/>
    </Router>

  )
}

export default App