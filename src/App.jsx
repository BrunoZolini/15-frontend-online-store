import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/product-details/:id" component={ ProductDetails } />
        </Switch>
        {/* // teste */}
      </BrowserRouter>
    );
  }
}

export default App;
