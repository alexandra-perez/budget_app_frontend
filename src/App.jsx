import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Index from './Pages/Index/Index';

// Components
import Nav from './Components/Nav/Nav';

const API = import.meta.env.VITE_API_URL;

function App() {
  // useEffect(() => {
  //   fetch(`${API}/transactions`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resJSON) => console.log(resJSON));
  // }, []);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
