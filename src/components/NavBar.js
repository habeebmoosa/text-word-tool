import React from 'react'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className='NavBar'>
      <div className='logo'>
        <h2 className='Heading'>Text Word Tool</h2>
      </div>
      <div className='menu'>
            <Link to="/" className='navLink'>Home</Link>
            <Link to="/about" className='navLink'>About</Link>
            <Link to="/contact" className='navLink'>Contact</Link>
            
      </div>
    </nav>
  )
}
