import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import Home from './pages/Home/Home';
import About  from './pages/About/About';
import Webgl01  from './pages/Webgl01/Webgl01';
import Navbar from './components/Navbar/Navbar';
import NavbarMobile from './components/Navbar/NavbarMobile';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';
import './App.css'
import { db } from './firebase/firebase-config';
import { ref, onValue } from 'firebase/database';
import React, { useEffect } from 'react';



function App() {
  useEffect(() => {
    const starCountRef = ref(db, 'some/path');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('資料：', data);
    });
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Router>
      
      {isMobile ? <NavbarMobile /> : <Navbar />}

      
      <Routes>
        {/*
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/about" element={<h1>About Page</h1>}/>
        */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/webgl01" element={<Webgl01/>}/>
      </Routes>
      <BackToTopBtn />
    </Router>
    
  )
}

export default App
