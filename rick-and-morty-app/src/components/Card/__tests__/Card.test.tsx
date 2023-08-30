import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

const props = {
  name: 'Test Name',
  image: 'test.jpg',
  gender: 'Male',
  species: 'Human',
};

describe('<Card />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Card {...props} />);
    expect(container).toBeDefined();
  });

  it('Should render props correctly', () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText('Test Name')).toBeDefined();
    expect(getByText('gender: Male')).toBeDefined();
    expect(getByText('species: Human')).toBeDefined();
  });
});
