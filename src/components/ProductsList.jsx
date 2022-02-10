import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  async componentDidMount() {
    const { searchValue, categoryValue } = this.props;
    console.log(searchValue, '', categoryValue);
    const { results } = await getProductsFromCategoryAndQuery(
      categoryValue, searchValue,
    );
    this.setState({ productsList: results });
  }

  render() {
    const { productsList } = this.state;
    return (
      <div>
        { productsList.length ? productsList.map(({ id, title, thumbnail, price }) => (
          <ProductCard
            key={ id }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />)) : <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}

ProductsList.propTypes = {
  searchValue: PropTypes.string,
  categoryValue: PropTypes.string,
};

ProductsList.defaultProps = {
  searchValue: '',
  categoryValue: '',
};

export default ProductsList;
