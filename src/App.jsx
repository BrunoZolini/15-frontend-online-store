import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';
import PurchaseCart from './components/PurchaseCart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonCartCliked: false,
      cartList: [],
      inputValue: '',
      isButtonClicked: false,
      searchValue: '',
      categoryClicked: false,
      categoryId: '',
      isButtonAddDisable: false,
    };
  }

componentDidMount = () => {
  const localReturn = localStorage.getItem('cartList');
  const arrayReturn = JSON.parse(localReturn);
  if (!arrayReturn) {
    this.setState({ cartList: [] });
  } else {
    this.setState({ cartList: arrayReturn });
  }
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

  handleAddCartButton = (product) => {
    const { cartList } = this.state;
    if (cartList.some((testExist) => testExist.id === product.id)) {
      const newCardList = cartList.map((productRep) => {
        if (productRep.id === product.id) {
          productRep.quantity += 1;
          return productRep;
        }
        return productRep;
      });
      this.setState({ cartList: newCardList });
      this.handleCartSize(newCardList);
    } else {
      product.quantity = 1;
      this.setState({
        cartList: [...cartList, product] });
      this.handleCartSize([...cartList, product]);
    }
  }

  handleButtonDisableCartAdd = (product) => {
    if (product.quantity === product.availableQuantity) {
      this.setState({
        isButtonAddDisable: true,
      });
    } else {
      this.handleAddCartButton(product);
    }
  }

  handleDecreaseCartButton = (product) => {
    const { cartList } = this.state;
    if (product.quantity > 1) {
      const newCardList = cartList.map((productRep) => {
        if (productRep.id === product.id) {
          productRep.quantity -= 1;
          return productRep;
        }
        return productRep;
      });
      this.setState({ cartList: newCardList });
      this.handleCartSize(newCardList);
    } else {
      this.handleRemoveCartButton(product);
    }
  }

  handleRemoveCartButton = (product) => {
    const { cartList } = this.state;
    const newCardList = cartList.filter((productRep) => productRep.id !== product.id);
    this.setState({ cartList: newCardList });
    this.handleCartSize(newCardList);
  }

  handleCartSize = (cartList) => {
    const jsonCart = JSON.stringify(cartList);
    localStorage.setItem('cartList', jsonCart);
  }

  render() {
    const {
      cartList,
      buttonCartCliked,
      inputValue,
      isButtonClicked,
      searchValue,
      categoryClicked,
      categoryId,
      isButtonAddDisable,
    } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Search
              { ...props }
              handleAddCartButton={ this.handleButtonDisableCartAdd }
              handleDecreaseCartButton={ this.handleDecreaseCartButton }
              handleRemoveCartButton={ this.handleRemoveCartButton }
              cartList={ cartList }
              buttonCartCliked={ buttonCartCliked }
              inputValue={ inputValue }
              isButtonClicked={ isButtonClicked }
              searchValue={ searchValue }
              categoryClicked={ categoryClicked }
              categoryId={ categoryId }
              handleChange={ this.handleChange }
              handleButton={ this.handleButton }
              handleCategoryButton={ this.handleCategoryButton }
              handleCartButton={ this.handleCartButton }
              isButtonAddDisable={ isButtonAddDisable }
            />) }
          />

          <Route
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              handleAddCartButton={ this.handleButtonDisableCartAdd }
              handleCartButton={ this.handleCartButton }
              buttonCartCliked={ buttonCartCliked }
              cartList={ cartList }
              isButtonAddDisable={ isButtonAddDisable }
            />) }
          />
          <Route
            path="/purchase-cart"
            render={ (props) => (<PurchaseCart
              { ...props }
              cartList={ cartList }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
