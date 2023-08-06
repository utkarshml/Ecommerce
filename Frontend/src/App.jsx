// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Headers from './components/Header.jsx'

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>

    </Router>

  )
}

export default App