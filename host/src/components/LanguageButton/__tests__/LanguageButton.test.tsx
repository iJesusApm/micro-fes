import React from 'react';
import { render } from '@testing-library/react';
import LanguageSwitcher from '../index';

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
    i18n: { language: 'es' },
  }),
}));

describe('<LanguageSwitcher />', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(
      <LanguageSwitcher message="switch language" />,
    );
    expect(container).toBeDefined();
    expect(getByText('switch language')).toBeDefined();
  });
});
