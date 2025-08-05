import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
      <>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/webgl01">webgl</Link>
      </nav>

      </>
    );
}
export default Navbar;