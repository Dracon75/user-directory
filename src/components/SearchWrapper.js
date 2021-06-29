import React from "react";
import SearchBar from "./SearchBar.js";
import '../UserDirectory.css';;

function SearchWrapper({ handleSearch }) {
  return (

    <div className="" id="">
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
}
export default SearchWrapper;