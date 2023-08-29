import React from 'react';
import { I18nextProvider } from 'react-i18next';
import appCInstance from '../i18n';

interface AppI18nWrapperProps {
  children: React.ReactNode;
}

const AppCI18nWrapper: React.FC<AppI18nWrapperProps> = ({ children }) => {
  return <I18nextProvider i18n={appCInstance}>{children}</I18nextProvider>;
};

export default AppCI18nWrapper;
