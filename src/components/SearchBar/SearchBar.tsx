import React, { Component } from 'react';

import './searchbar.css';

type IProps = {
  onUpdateSearchBar: (term: string) => void;
  term: string;
};

class SearchBar extends Component<IProps> {
  updateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onUpdateSearchBar(e.target.value);
  };

  componentWillUnmount() {
    const { term } = this.props;
    localStorage.setItem('search', term);
  }

  render() {
    const { term } = this.props;
    return (
      <div className="search__bar">
        <div className="search__bar-icon"></div>
        <input
          className="input-value"
          id="input"
          type="text"
          data-testid="search-input"
          placeholder="Search"
          onInput={this.updateChange}
          value={term}
        />
      </div>
    );
  }
}

export default SearchBar;
