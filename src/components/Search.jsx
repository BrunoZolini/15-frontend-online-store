import React, { Component } from 'react';
import { getCategories } from '../services/api';

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
        {
          getCategories().map(({ name, id }) => (
            <section
              key={ id }
            >
              <button
                type="button"
                data-testid="category"
              >
                { console.log(name) }
              </button>
            </section>))
        }
      </div>
    );
  }
}

export default Search;
