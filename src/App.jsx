import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Search from './components/Search';

class App extends Component {
  componentDidMount() {
    getCategories();
  }
<<<<<<< HEAD

=======
  
>>>>>>> b4e91bb7baf877494c30dec6c65698718ff925df
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
