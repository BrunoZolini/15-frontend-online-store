import React, { Component } from 'react';
import ProductsList from './ProductsList';
import Categories from './Categories';
import cart from '../icons/shopping-cart.png';
// import ProductDetails from './ProductDetails';
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
    this.setState({
      buttonCartCliked: false,
      isButtonClicked: true,
      searchValue: inputValue });
  }

  handleCategoryButton = (id) => {
    this.setState({ buttonCartCliked: false, categoryClicked: false, categoryId: '' },
      () => this.setState({ categoryClicked: true, categoryId: id }));
  }

  handleAddCartButton = (product) => {
    const { cartList } = this.state;
    if (cartList.some((testExist) => testExist.id === product.id)) {
      const newCardList = cartList.filter((productRep) => {
        product.quantity = productRep.quantity;
        return productRep.id !== product.id;
      });
      product.quantity += 1;
      this.setState({ cartList: [...newCardList, product] });
    } else {
      product.quantity = 1;
      this.setState({ cartList: [...cartList, product] });
    }
  }

  handleCartButton = (currentState) => {
    this.setState({ buttonCartCliked: !currentState });
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
        </section>
      </main>
    );
  }
}

export default Search;
