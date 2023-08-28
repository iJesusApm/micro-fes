import React from "react";

type CharacterProps = {
  name: string;
  image: string;
  gender: string;
  species: string;
};

const Card: React.FC<CharacterProps> = ({ name, image, gender, species }) => {
  return (
    <div className="border rounded-lg mb-4">
      <img src={image} alt={name} className="w-full min-w-[200px] mb-2" />
      <div className="p-2">
        <h5 className="text-xl font-semibold">{name}</h5>
        <div className="border-t mt-2 pt-2">
          <p>Gender: {gender}</p>
          <p>Species: {species}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
