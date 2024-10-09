// import { useState, createContext, useEffect } from "react";

// export const MyContext = createContext();
// export const Context = ({ children }) => {
//   const [character, setCharacter] = useState([]);

//   useEffect(() => {
//     fetch("https://rickandmortyapi.com/api/character")
//       .then(response => response.json())
//       .then((data) => {
//         setCharacter(data.results)
//         // console.log(data.results);
//       }
//       )
//   }, []);

//   return (
//     <MyContext.Provider value={{ character, setCharacter }}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// export default Context;





import { useState, createContext, useEffect } from "react";

export const MyContext = createContext();

export const Context = ({ children }) => {
  const [character, setCharacter] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Estado para personajes filtrados

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then((data) => {
        setCharacter(data.results);
        setFilteredCharacters(data.results); // Inicializa los personajes filtrados con todos
      });
  }, []);

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
    }}>
      {children}
    </MyContext.Provider>
  );
}

export default Context;