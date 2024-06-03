import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Models from './components/Models';
import Dataset from './components/Dataset';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/models" element={<Models/>}/>
          <Route exact path='/dataset' element={<Dataset/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;