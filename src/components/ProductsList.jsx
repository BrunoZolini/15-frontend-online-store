import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <Link
            to={ `/product-details/${id}` }
            key={ id }
          >
            <ProductCard
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          </Link>)) : <p>Nenhum produto foi encontrado</p> }
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
