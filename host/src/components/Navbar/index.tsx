import React from 'react';
import { Button, StyledNavbar, Title } from './styles';

const Navbar = () => {
  const handlePress = () => {
    console.log('change language');
  };

  return (
    <StyledNavbar>
      <Title>N5 Microfrontends - Characteres List</Title>
      <Button onClick={handlePress}>Cambiar Idioma</Button>
    </StyledNavbar>
  );
};

export default Navbar;
