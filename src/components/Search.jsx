import React, { Component } from 'react';
import Categories from './Categories';

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories />
      </div>
    );
  }
}

export default Search;
