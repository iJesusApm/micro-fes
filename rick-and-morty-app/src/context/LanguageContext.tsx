import React from 'react';
import { I18nextProvider } from 'react-i18next';
import appBInstance from '../i18n';

interface AppI18nWrapperProps {
  children: React.ReactNode;
}

const AppBI18nWrapper: React.FC<AppI18nWrapperProps> = ({ children }) => {
  return <I18nextProvider i18n={appBInstance}>{children}</I18nextProvider>;
};

export default AppBI18nWrapper;
