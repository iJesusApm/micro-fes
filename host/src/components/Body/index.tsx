import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StyledBody } from './styles';

import Empty from '../Empty';

import RickAndMorty from 'rick_and_morty/List';
import HarryPotter from 'harry_potter/List';

const Body = () => {
  const { t } = useTranslation();
  const [option, setOption] = useState(0);

  const RenderOption = () => {
    switch (option) {
      case 1:
        return <RickAndMorty />;
      case 2:
        return <HarryPotter />;
      default:
        return <Empty />;
    }
  };
  return (
    <>
      <StyledBody>
        <Button onClick={() => setOption(1)}>{t('rickAndMorty')}</Button>
        <Button onClick={() => setOption(2)}>{t('harryPotter')}</Button>
      </StyledBody>
      <RenderOption />
    </>
  );
};

export default Body;
