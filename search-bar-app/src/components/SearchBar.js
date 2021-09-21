import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <div>
      <form>
        <input type="text" placeholder={placeholder} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
