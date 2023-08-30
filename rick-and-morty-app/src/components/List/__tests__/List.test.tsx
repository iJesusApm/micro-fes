import React from 'react';
import { render, waitFor } from '@testing-library/react';
import List from '../List';

jest.mock('../../../services/api/characters.ts', () => ({
  fetchCharacters: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'Character 1',
        image: 'image1.jpg',
        gender: 'Male',
        species: 'Human',
      },
      {
        id: 2,
        name: 'Character 2',
        image: 'image2.jpg',
        gender: 'Female',
        species: 'Alien',
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
