import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dog = searchParams.get("dog");
  const cat = searchParams.get("cat");

  return (
    <div>
      <Link to="/?dog=dog&cat=cat">dog and cat</Link>
      SearchParams
      {dog && <p>{dog}</p>}
      {cat && <p>{cat}</p>}
      <button
        onClick={() =>
          setSearchParams({ dog: "update dog", cat: "update cat" })
        }
      >
        Update Search Params
      </button>
    </div>
  );
};

export default SearchParams;
