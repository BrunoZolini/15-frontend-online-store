import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../icons/shopping-cart.png';

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
        <Link data-testid="shopping-cart-button" to="/CartButton" />
        <img src={ cart } alt="shopping-cart-icon" />
      </div>
    );
  }
}

export default Search;
