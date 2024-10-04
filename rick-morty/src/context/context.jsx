import { useState, createContext, useEffect } from "react";

export const MyContext = createContext();
export const Context = ({ children }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {setCharacter(data.results)
        console.log(data.results);
      })
  }, []);

  return (
    <MyContext.Provider value={{
      character,
      setCharacter,
    }
    }>
      {children}
    </MyContext.Provider>
  )
}

export default Context;