import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';

class App extends Component {
<<<<<<< HEAD:src/App.jsx

=======
>>>>>>> d4a50ce32c8e3a6b20d8d66c6597175055d95db1:src/App.js
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
