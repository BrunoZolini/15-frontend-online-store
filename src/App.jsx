import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
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
    } else {
      product.quantity = 1;
      this.setState({ cartList: [...cartList, product] });
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
    } else {
      this.handleRemoveCartButton(product);
    }
  }

  handleRemoveCartButton = (product) => {
    const { cartList } = this.state;
    const newCardList = cartList.filter((productRep) => productRep.id !== product.id);
    this.setState({ cartList: newCardList });
  }

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (...props) => (<Search
              { ...props }
              handleAddCartButton={ this.handleAddCartButton }
              handleDecreaseCartButton={ this.handleDecreaseCartButton }
              handleRemoveCartButton={ this.handleRemoveCartButton }
              cartList={ cartList }
            />) }
          />

          <Route
            path="/product-details/:id"
            render={ (...props) => (<ProductDetails
              { ...props }
              handleAddCartButton={ this.handleAddCartButton }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
