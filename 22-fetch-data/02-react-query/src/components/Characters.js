import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

const Characters = () => {
  const [page, setPage] = useState(42);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  // use array to get unique
  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  console.log("data", data);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>error!</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prevState) => prevState - 1)}
        >
          Previous
        </button>
        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((prevState) => prevState + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
