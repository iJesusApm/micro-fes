import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../index';

// Mock useSwitchLanguage y useTranslation
jest.mock('../../../hooks/useSwitchLanguage.ts', () => ({
  __esModule: true,
  default: () => ({
    switchAllLanguages: jest.fn(),
  }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('<Navbar />', () => {
  it('should render correctly', () => {
    const { container } = render(<Navbar />);
    expect(container).toBeDefined();
  });

  it('should display the title', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('N5 Microfrontends - app')).toBeDefined();
  });

  it('should render the LanguageSwitcher component', () => {
    const { getByTestId } = render(<Navbar />);
    const languageSwitcher = getByTestId('language-switcher');
    expect(languageSwitcher).toBeDefined();
  });
});
