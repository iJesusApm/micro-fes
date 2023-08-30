import React from 'react';
import { render } from '@testing-library/react';
import Card from '../index';

const props = {
  name: 'Harry Potter',
  image: 'harry.jpg',
  gender: 'Male',
  species: 'Human',
};

describe('<Card />', () => {
  it('Should render correctly', () => {
    const { container, getByTestId } = render(<Card {...props} />);
    expect(container).toBeDefined();
    expect(getByTestId('character-card')).toBeDefined();
  });

  it('Should render props correctly', () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText('Harry Potter')).toBeDefined();
    expect(getByText('gender: Male')).toBeDefined();
    expect(getByText('species: Human')).toBeDefined();
  });
});
