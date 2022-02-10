import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Search from './components/Search';
import CartButton from './components/CartButton';

class App extends Component {
  componentDidMount() {
    // coment
    getCategories();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/CartButton" component={ CartButton } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
