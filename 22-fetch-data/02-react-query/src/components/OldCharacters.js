import React, { useEffect, useState } from "react";

const OldCharacters = () => {
  // FIXME:
  // 1. add loading
  // 2. add error handling
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default OldCharacters;
