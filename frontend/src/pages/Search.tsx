import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/reducer";

const Search = () => {
  const searchState = useSelector((state: RootState) => state.search);

  useEffect(() => console.log("searchState", searchState), []);
  return <div>Search</div>;
};

export default Search;
