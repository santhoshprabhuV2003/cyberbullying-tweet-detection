import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Models from './components/Models';
import Dataset from './components/Dataset';

function App() {
  return (
    <>
      {/* Basename for GitHub pages */}
      <Router basename="/cyberbullying-tweet-detection/">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/models" element={<Models/>}></Route>
          <Route path="/dataset" element={<Dataset/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;