import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductsList';
import Categories from './Categories';
import cart from '../icons/shopping-cart.png';
import Cart from './Cart';
import '../styles/Search.css';

class Search extends Component {
  render() {
    const {
      handleAddCartButton,
      handleDecreaseCartButton,
      handleRemoveCartButton,
      handleCategoryButton,
      handleButton,
      handleChange,
      cartList,
      buttonCartCliked,
      inputValue,
      isButtonClicked,
      searchValue,
      categoryClicked,
      categoryId,
      handleCartButton,
    } = this.props;
    return (
      <main>
        <Categories onClickCategory={ handleCategoryButton } />
        <section className="section-search">
          <div className="serach-line">
            <form className="form-search">
              <button
                type="button"
                data-testid="query-button"
                onClick={ handleButton }
              >
                Pesquisar
              </button>
              <input
                className="input-search"
                data-testid="query-input"
                name="inputValue"
                type="text"
                value={ inputValue }
                onChange={ handleChange }
              />
            </form>

            <button
              className="button-cart"
              data-testid="shopping-cart-button"
              type="button"
              onClick={ () => handleCartButton(buttonCartCliked) }
            >
              <img className="img-cart" src={ cart } alt="shopping-cart-icon" />
              <span
                className="cart-counter"
                data-testid="shopping-cart-size"
              >
                { cartList.reduce((acc, { quantity }) => {
                  if (!quantity) return acc;
                  acc += quantity;
                  return acc;
                }, 0) }
              </span>
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
  buttonCartCliked: PropTypes.bool.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.object),
  inputValue: PropTypes.string,
  isButtonClicked: PropTypes.bool.isRequired,
  searchValue: PropTypes.string,
  categoryClicked: PropTypes.bool.isRequired,
  categoryId: PropTypes.string,
  handleCategoryButton: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCartButton: PropTypes.func.isRequired,
};

Search.defaultProps = {
  cartList: [],
  inputValue: '',
  searchValue: '',
  categoryId: '',
};

export default Search;
