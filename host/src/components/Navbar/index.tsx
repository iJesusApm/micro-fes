import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledNavbar, Title } from './styles';
import LanguageSwitcher from '../LanguageButton';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <StyledNavbar>
      <Title>N5 Microfrontends - {t('app')}</Title>
      <LanguageSwitcher message="changeLanguage" />
    </StyledNavbar>
  );
};

export default Navbar;
