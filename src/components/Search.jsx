import React, { Component } from 'react';
import ProductsList from './ProductsList';
import Categories from './Categories';
import cart from '../icons/shopping-cart.png';
import Cart from './Cart';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isButtonClicked: false,
      searchValue: '',
      categoryClicked: false,
      categoryId: '',
      cartList: [],
      buttonCartCliked: false,
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

  handleAddCartButton = (id, title, thumbnail, price) => {
    const { cartList } = this.state;
    const product = { id, title, thumbnail, price };
    this.setState({ cartList: [...cartList, product] });
  }

  handleCartButton = () => {
    const { buttonCartClicked } = this.state;
    this.setState({ buttonCartCliked: !buttonCartClicked });
  }

  render() {
    const {
      inputValue,
      isButtonClicked,
      searchValue,
      categoryClicked,
      categoryId,
      cartList,
      buttonCartCliked,
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

        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.handleCartButton }
        >
          <img src={ cart } alt="shopping-cart-icon" />
        </button>
        {
          (buttonCartCliked && (!isButtonClicked || !categoryClicked))
                && <Cart cartList={ cartList } />
        }

        {
          (!buttonCartCliked
            && (isButtonClicked
            || categoryClicked))
              && (<ProductsList
                searchValue={ searchValue }
                categoryValue={ categoryId }
                handleAddCartButton={ this.handleAddCartButton }
              />)
        }
        {
          (!buttonCartCliked
          && (!isButtonClicked
          || !categoryClicked))
          && (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
        }

        <Categories onClickCategory={ this.handleCategoryButton } />
      </div>
    );
  }
}

export default Search;
