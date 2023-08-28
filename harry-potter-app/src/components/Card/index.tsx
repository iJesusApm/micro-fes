import React from 'react';
import { CardContainer, Image, CardInfo, Title, InfoSection } from './styles';

type CharacterProps = {
  name: string;
  image: string;
  gender: string;
  species: string;
};

const Card: React.FC<CharacterProps> = ({ name, image, gender, species }) => {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <CardInfo>
        <Title>{name}</Title>
        <InfoSection>
          <p className="bem-gender">Gender: {gender}</p>
          <p className="bem-species">Species: {species}</p>
        </InfoSection>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
