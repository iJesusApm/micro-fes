import React, { useState } from "react";
import { Button, StyledBody } from "./styles";

import RickAndMorty from "rick_and_morty/List";
import HarryPotter from "harry_potter/List";
import Empty from "../Empty";

const Body = () => {
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
        <Button onClick={() => setOption(1)}>Rick and Morty</Button>
        <Button onClick={() => setOption(2)}>Harry Potter</Button>
      </StyledBody>
      <RenderOption />
    </>
  );
};

export default Body;
