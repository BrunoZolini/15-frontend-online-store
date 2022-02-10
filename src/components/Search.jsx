import React, { Component } from 'react';
<<<<<<< HEAD
import Categories from './Categories';
=======
import { Link } from 'react-router-dom';
import cart from '../icons/shopping-cart.png';
>>>>>>> main-group-6

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
<<<<<<< HEAD
        <Categories />
=======
        <Link data-testid="shopping-cart-button" to="/CartButton" />
        <img src={ cart } alt="shopping-cart-icon" />
>>>>>>> main-group-6
      </div>
    );
  }
}

export default Search;
