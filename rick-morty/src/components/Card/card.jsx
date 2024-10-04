import React, { useContext } from 'react';
import "./card.css"
import { MyContext } from "../../context/context";

const Card = () => {
  const { character } = useContext(MyContext);

  if (character.length === 0) {
    return <p>Loading...</p>;
  }

  return (

    <div className='card-container'>

      {character.map(character => (

        <div className='cards' key={character.id}>
          <h2 className='name-character'>{character.name}</h2>
          <img className='image-character' src={character.image} alt="imagen" />
          <div className='features'>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Origin: {character.origin.name}</p>
          </div>
        </div>
      ))}

    </div>

  );
}
export default Card;