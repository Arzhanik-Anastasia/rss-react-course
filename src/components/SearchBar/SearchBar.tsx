import { useEffect, useState } from 'react';
import { IPropsSearchBar } from 'types/interfaces';

import './searchbar.css';

const SearchBar = ({ onUpdateSearchBar, search }: IPropsSearchBar) => {
  const [searchString, setSearch] = useState(search);

  useEffect(() => {
    return localStorage.setItem('search', search);
  });
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onUpdateSearchBar(searchString);
      }}
    >
      <div className="search__bar">
        <div className="search__bar-icon"></div>
        <input
          className="input-value"
          id="input"
          type="text"
          data-testid="search-input"
          placeholder="Search"
          value={searchString}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button
        className="button-search"
        data-testid="btn-search"
        onClick={() => {
          onUpdateSearchBar(searchString);
        }}
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
