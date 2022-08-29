import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div><nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link to='/about'><li>About Us</li></Link>
        <Link to='/shop'><li>Shop</li></Link>
        <Link to='/service'><li>Services</li></Link>
        <Link to='/contact'><li>Contact Us</li></Link>
      </ul>
      </nav></div>
  )
}
