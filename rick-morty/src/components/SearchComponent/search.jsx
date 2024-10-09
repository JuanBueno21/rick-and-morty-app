import React, { useState, useContext } from 'react';
import { MyContext } from "../../context/context";
import "./search.css";

const Search = () => {
  const { filterCharacters } = useContext(MyContext); // Obtenemos la función de filtrado del contexto
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
    filterCharacters(e.target.value); // Llamamos a la función de filtrado cada vez que cambia el input
  }

  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder="Search for a character..."
        value={search}
        onChange={searcher}
      />
    </div>
  );
}

export default Search;