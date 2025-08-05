import './NavbarMobile.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function NavbarMobile(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        console.log('Menu toggled');
        setIsMenuOpen(prev => !prev);
        console.log("isMenuOpen:", isMenuOpen);
    }
    const menuRef = useRef(null);
    const menuBtnRef = useRef(null);
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)&&
                      menuBtnRef.current &&
      !menuBtnRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
                console.log('Clicked outside the menu, closing it');
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };

    },[])
    return(
      <>
        <div className={`overlay-container ${isMenuOpen ? 'show' : ''}`} >
        <div className='menu-overlay' >
            <div className='menu-list' ref={menuRef}>
                <Link to="/" className='menu' onClick={()=>setIsMenuOpen(false)} >Home</Link>
                <Link to="/about" className='menu' onClick={()=>setIsMenuOpen(false)}>About</Link>
                <Link to="/webgl01" className='menu' onClick={()=>setIsMenuOpen(false)}>WebGL</Link>   
            </div>
        </div>
        </div>
        <nav className='navbar-mobile'>
            <div className='menu-btn' ref={menuBtnRef} onClick={toggleMenu}>
            </div>    
        </nav>

      </>
    );
}
export default NavbarMobile;