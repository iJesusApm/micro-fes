import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../services/api/characters";
import Card from "./Card";
import { Character } from "../types/character";

const List = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Rick and Morty Wiki</h1>
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
      </div>
    </div>
  );
};

export default List;
