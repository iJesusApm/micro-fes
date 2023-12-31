import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/api/characters';
import { Character } from '../../types/character';
import { Grid, ListContainer } from './styles';
import Header from '../Header';
import Card from '../Card';
import AppCI18nWrapper from '../../context/LanguageContext';

const List = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <AppCI18nWrapper>
      <ListContainer>
        <Header />
        <Grid>
          {characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              species={character.species}
            />
          ))}
        </Grid>
      </ListContainer>
    </AppCI18nWrapper>
  );
};

export default List;
