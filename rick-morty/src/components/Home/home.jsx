// import "./home.css"
// import Card from "../Card/card"
// import Navbar from '../Navbar/navbar'

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Card />
//     </>
//   )
// }

// export default Home;


import React, { useContext } from 'react';
import "./home.css";
import Card from "../Card/card";
import Navbar from '../Navbar/navbar';
import { MyContext } from "../../context/context";

const Home = () => {
  const { filteredCharacters } = useContext(MyContext); // Obtener los personajes filtrados desde el contexto

  return (
    <>
      <Navbar /> {/* Ya no necesitamos pasar funciones aquí */}
      <Card characters={filteredCharacters} /> {/* Renderizamos los personajes filtrados */}
    </>
  );
}

export default Home;