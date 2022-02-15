import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import Categories from './Categories';
import cart from '../icons/shopping-cart.png';
import Cart from './Cart';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isButtonClicked: false,
      searchValue: '',
      categoryClicked: false,
      categoryId: '',
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
    this.setState({
      buttonCartCliked: false,
      isButtonClicked: true,
      searchValue: inputValue });
  }

  handleCategoryButton = (id) => {
    this.setState({ buttonCartCliked: false, categoryClicked: false, categoryId: '' },
      () => this.setState({ categoryClicked: true, categoryId: id }));
  }

  handleCartButton = (currentState) => {
    this.setState({ buttonCartCliked: !currentState });
  }

  render() {
    const {
      handleAddCartButton,
      handleDecreaseCartButton,
      handleRemoveCartButton,
      cartList,
    } = this.props;

    const {
      inputValue,
      isButtonClicked,
      searchValue,
      categoryClicked,
      categoryId,
      buttonCartCliked,
    } = this.state;
    return (
      <main>
        <Categories onClickCategory={ this.handleCategoryButton } />
        <section className="section-search">
          <div className="serach-line">
            <form className="form-search">
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.handleButton }
              >
                Pesquisar
              </button>
              <input
                className="input-search"
                data-testid="query-input"
                name="inputValue"
                type="text"
                value={ inputValue }
                onChange={ this.handleChange }
              />
            </form>

            <button
              className="button-cart"
              data-testid="shopping-cart-button"
              type="button"
              onClick={ () => this.handleCartButton(buttonCartCliked) }
            >
              <img className="img-cart" src={ cart } alt="shopping-cart-icon" />
              <span className="cart-counter">{ cartList.length }</span>
            </button>
          </div>
          {
            (buttonCartCliked && (!isButtonClicked || !categoryClicked))
                && <Cart
                  cartList={ cartList }
                  onDecreaseButton={ handleDecreaseCartButton }
                  onRemoveButton={ handleRemoveCartButton }
                  onAddButton={ handleAddCartButton }
                />
          }

          {
            (!buttonCartCliked
            && (isButtonClicked
            || categoryClicked))
              && (<ProductsList
                searchValue={ searchValue }
                categoryValue={ categoryId }
                handleAddCartButton={ handleAddCartButton }
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
        </section>
      </main>
    );
  }
}

Search.propTypes = {
  handleAddCartButton: PropTypes.func.isRequired,
  handleDecreaseCartButton: PropTypes.func.isRequired,
  handleRemoveCartButton: PropTypes.func.isRequired,
  cartList: PropTypes.arrayOf(),
};

Search.defaultProps = {
  cartList: [],
};

export default Search;
