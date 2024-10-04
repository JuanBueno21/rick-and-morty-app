import React from 'react'
import "./navbar.css"
import logo from '../../assets/homePage/logo.jpg'
import rickandmorty from "../../assets/homePage/rickandmorty.jpg"

const Navbar = () => {
  return (

    <div className='head-container'>

      <div className='navbar-container'>

        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='image-page'>
          <img src={rickandmorty} alt="title" />
        </div>

        <div className='menu'>
          MENU
        </div>

      </div>

      <div className='linear-gradient'>
      </div>

    </div>

  )
}
export default Navbar;