import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
      <>
      <nav className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/webgl01">WebGL</NavLink>
      </nav>

      </>
    );
}
export default Navbar;