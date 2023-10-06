import React from 'react'
import {Link} from 'react-scroll'
import "../styles/navbar.scss"
import img from '../assets/logo.png'
import contactImg from '../assets/contact.png'


const Navbar = () => {
  return (
    <div>
          <nav className="navbar" style={{backgroundColor:'#36454f'}}>
        <Link className='navLogo'>
          <img className='navlogo' src={img}></img>
          <span className='navName'>BHAVYA ANAND</span>
        </Link>
              <div className="navMenu">
                  <Link className="navMenuList" id='home' style={{color:'#da38da', borderBottom:' 3px solid #da38da'}}>HOME</Link>
                  <Link className="navMenuList">PROJECTS</Link>
                  <Link className="navMenuList">ABOUT</Link>
                  <Link className="navMenuList">CONTACT</Link>
              </div>
      </nav>
    </div>
  )
}

export default Navbar
