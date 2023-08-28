import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  min-width: 200px;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const CardInfo = styled.div`
  padding: 0.5rem;
`;

const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const InfoSection = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
`;

export { CardContainer, Image, CardInfo, Title, InfoSection };
