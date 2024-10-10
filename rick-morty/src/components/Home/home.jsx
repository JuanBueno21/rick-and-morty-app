import "./home.css";
import Card from "../Card/card";
import Navbar from '../Navbar/navbar';
import React, { useContext } from 'react';
import { MyContext } from "../../context/context";
import Pagination from '../Pagination/pagination';

const Home = () => {
  const { filteredCharacters } = useContext(MyContext); // obtengo los personajes filtrados desde el contexto

  return (
    < >
      <Navbar /> 
      <Card characters={filteredCharacters} />
      <Pagination />
    </>
  );
}

export default Home;