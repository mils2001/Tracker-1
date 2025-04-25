import React from "react";
import "./SearchBar.css"; // Optional if using plain CSS

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by description or category..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
