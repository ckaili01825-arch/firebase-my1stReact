import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';

import Navbar from './components/Navbar/Navbar';
import NavbarMobile from './components/Navbar/NavbarMobile';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';
import RouteScrollReset from './components/RouteScrollReset';
import Footer from './components/Footer/Footer';  
import ParallaxBackground from './components/ParallaxBackground';
import Home from './pages/Home/Home';
import About  from './pages/About/About';
import './App.css'
import { db } from './firebase/firebase-config';
import { ref, onValue } from 'firebase/database';
import React, { Suspense, useEffect } from 'react';

/*


import Webgl01  from './pages/Webgl01/Webgl01';
import Works from './pages/Works/Works';
*/
//lazy loading the pages
const Webgl01 = React.lazy(() => import('./pages/Webgl01/Webgl01'));
const Works = React.lazy(() => import('./pages/Works/Works'));

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
      <RouteScrollReset />
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Suspense fallback={<div className='spinner'></div>}>
        <Routes>
          {/*
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/about" element={<h1>About Page</h1>}/>
          */}
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/webgl01" element={<Webgl01/>}/>
        </Routes>
      </Suspense>
       {/*
       <div>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/works">Works</Link>
         <Link to="/webgl01">Webgl01</Link>
       </div>
       */}
      <BackToTopBtn />
       <Footer/>
    </Router>
   
  )
}

export default App
