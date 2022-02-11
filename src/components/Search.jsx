import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import ProductsList from './ProductsList';
import Categories from './Categories';
import cart from '../icons/shopping-cart.png';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isButtonClicked: false,
      searchValue: '',
      categoryClicked: false,
      categoryId: '',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { inputValue } = this.state;
    this.setState({ isButtonClicked: true, searchValue: inputValue });
  }

  handleCategoryButton = (id) => {
    this.setState({ categoryClicked: false, categoryId: '' },
      () => this.setState({ categoryClicked: true, categoryId: id }));
  }

  render() {
    const {
      inputValue,
      isButtonClicked,
      searchValue,
      categoryClicked,
      categoryId,
    } = this.state;
    return (
      <div>
        <form>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleButton }
          >
            Pesquisar
          </button>
          <input
            data-testid="query-input"
            name="inputValue"
            type="text"
            value={ inputValue }
            onChange={ this.handleChange }
          />
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
        <Link data-testid="shopping-cart-button" to="/CartButton">
          <img src={ cart } alt="shopping-cart-icon" />
        </Link>
        { isButtonClicked || categoryClicked ? (
          <ProductsList
            searchValue={ searchValue }
            categoryValue={ categoryId }
          />)
          : (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)}
        <Categories onClickCategory={ this.handleCategoryButton } />
      </div>
    );
  }
}

export default Search;
