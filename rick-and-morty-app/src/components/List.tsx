import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api/characters';
import Card from './Card';
import { Character } from '../types/character';
import Header from './Header';

const List = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App container mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            species={character.species}
          />
        ))}
        H
      </div>
    </div>
  );
};

export default List;
