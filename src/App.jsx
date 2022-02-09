import React from 'react';
import { getCategories } from './services/api';

class App extends React.Component {
  componentDidMount() {
    getCategories();
  }

  render() {
    return (
      <div>oi</div>
    );
  }
}

export default App;
