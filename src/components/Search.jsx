import React, { Component } from 'react';
import ProductsList from './ProductsList';
import Categories from './Categories';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isButtonClicked: false,
      searchValue: '',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { inputValue } = this.state;
    this.setState({ isButtonClicked: true, searchValue: inputValue });
  }

  render() {
    const { inputValue, isButtonClicked, searchValue } = this.state;
    return (
      <div>
        <form>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleButton }
          >
            Pesquisar
          </button>
          <input
            data-testid="query-input"
            name="inputValue"
            type="text"
            value={ inputValue }
            onChange={ this.handleChange }
          />
        </form>
        { !isButtonClicked ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>) : <ProductsList searchValue={ searchValue } /> }
        <Categories />
      </div>
    );
  }
}

export default Search;
