import React from 'react';
import { render } from '@testing-library/react';
import Empty from '../index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Empty />);
    expect(container).toBeDefined();
    expect(getByText('option')).toBeDefined();
  });
});
