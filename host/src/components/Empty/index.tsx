import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledEmpty } from './styles';

const Empty = () => {
  const { t } = useTranslation();

  return (
    <StyledEmpty>
      <p>{t('option')}</p>
    </StyledEmpty>
  );
};

export default Empty;
