import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav.jsx'
import Main from './Main..jsx'
import About from './About.jsx';

function App(){
  return(
    <Router>
      <div className='container'>
        <Nav/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/calculator" element={<Main/>} />
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
