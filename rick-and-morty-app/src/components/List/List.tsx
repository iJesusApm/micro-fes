import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/api/characters';
import Card from '../Card/Card';
import { Character } from '../../types/character';
import Header from '../Header/Header';
import { Grid, ListContainer } from './styles';
import AppBI18nWrapper from '../../context/LanguageContext';

const List = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <AppBI18nWrapper>
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
    </AppBI18nWrapper>
  );
};

export default List;
