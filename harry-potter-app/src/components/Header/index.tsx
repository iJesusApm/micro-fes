import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderContainer, Title } from './styles';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <Title>{t('title')}</Title>
    </HeaderContainer>
  );
};

export default Header;
