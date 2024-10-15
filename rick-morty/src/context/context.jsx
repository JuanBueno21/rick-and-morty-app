import { useState, createContext, useEffect } from "react";

export const MyContext = createContext();

export const Context = ({ children }) => {
  const [character, setCharacter] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Estado para personajes filtrados
  const [info, setInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then(response => response.json())
      .then((data) => {
        setCharacter(data.results);
        // Inicializa los personajes filtrados con todos        
        setFilteredCharacters(data.results);
        // Obtiene la información de info
        setInfo(data.info);
      });
  }, [currentPage]);

  const filterCharacters = (searchText) => {
    if (searchText === "") {
      setFilteredCharacters(character); // Si no hay texto, mostrar todos
    } else {
      const filtered = character.filter(char =>
        char.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  };

  return (
    <MyContext.Provider value={{
      character,
      filteredCharacters,
      filterCharacters,
      info,
      currentPage,
      setCurrentPage,
    }}>
      {children}
    </MyContext.Provider>
  );
}

export default Context;