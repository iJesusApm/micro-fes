import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Header />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });

  it('Should display the title correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('title')).toBeDefined();
  });
});
