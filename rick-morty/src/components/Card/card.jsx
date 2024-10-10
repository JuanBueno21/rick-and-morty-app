import "./card.css"
import React from 'react';

const Card = ({ characters }) => {

  return (
    <div className='card-container'>
      {characters.map(character => (

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