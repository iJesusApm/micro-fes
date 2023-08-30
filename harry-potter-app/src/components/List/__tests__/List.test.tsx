import React from 'react';
import { render, waitFor } from '@testing-library/react';
import List from '../index';

jest.mock('../../../services/api/characters.ts', () => ({
  fetchCharacters: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'Harry Potter',
        image: 'harry.jpg',
        gender: 'Male',
        species: 'Human',
      },
      {
        id: 2,
        name: 'Hermione Grenger',
        image: 'image2.jpg',
        gender: 'Female',
        species: 'Human',
      },
    ]),
  ),
}));

describe('<List />', () => {
  it('Should render correctly', async () => {
    const { container } = render(<List />);
    await waitFor(() => expect(container).toBeDefined());
  });

  it('Should display a list of characters', async () => {
    const { getAllByTestId } = render(<List />);
    await waitFor(() => {
      const characterCards = getAllByTestId('character-card');
      expect(characterCards.length).toBe(2);
    });
  });
});
