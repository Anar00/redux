import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='contanier'>
        <div className='nav'> 
        <div className='textnav'><h3>CustomerFAVS NEXT</h3></div>
            <div className='right'>
            <ul>
            <li>
              <Link className='link' to="/"><b>Home</b> </Link>
            </li>
            <li>
              <Link className='link' to="/customers"><b>Customers</b></Link>
            </li>
            <li>
              <Link className='link' to="/favourites"><b>Favourites</b></Link>
            </li>
          </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar