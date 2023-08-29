import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardContainer, Image, CardInfo, Title, InfoSection } from './styles';

type CharacterProps = {
  name: string;
  image: string;
  gender: string;
  species: string;
};

const Card: React.FC<CharacterProps> = ({ name, image, gender, species }) => {
  const { t } = useTranslation();

  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <CardInfo>
        <Title>{name}</Title>
        <InfoSection>
          <p className="bem-gender">
            {t('gender')}: {t(`${gender}`)}
          </p>
          <p className="bem-species">
            {t('species')}: {t(`${species}`)}
          </p>
        </InfoSection>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
