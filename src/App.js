import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";


function App() {
  return (
   <>
    <Router>
      <Header />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
