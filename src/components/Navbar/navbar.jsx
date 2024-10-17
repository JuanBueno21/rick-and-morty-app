import "./navbar.css";
import React from 'react';
import logo from '../../assets/homePage/logo.jpg';
import Search from '../../components/SearchComponent/search';
import rickandmorty from "../../assets/homePage/rickandmorty.jpg";

const Navbar = ({ onSearch }) => { // Se recibe onSearch como prop
  return (
    <div className='head-container'>
      <div className='navbar-container'>
        
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='image-page'>
          {/* Elimina NavLink y la navegación */}
          <img src={rickandmorty} alt="rickandmorty" />
        </div>

        <div>
          <Search onSearch={onSearch} /> {/* Pasa la prop onSearch a Search */}
        </div>

      </div>
      <div className='linear-gradient'>
      </div>
    </div>
  );
}

export default Navbar;