import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Search from './components/Search';

class App extends Component {
  componentDidMount() {
    getCategories();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
