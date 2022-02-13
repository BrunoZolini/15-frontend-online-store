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
    const { results } = await getProductsFromCategoryAndQuery(
      categoryValue, searchValue,
    );
    this.setState({ productsList: results });
  }

  render() {
    const { productsList } = this.state;
    const { handleAddCartButton } = this.props;
    return (
      <div className="products-list">
        { productsList.length ? productsList.map(({
          id,
          title,
          thumbnail,
          price,
        }) => (
          <div
            className="product-card"
            key={ id }
          >
            <ProductCard
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
            <button
              className="button-add-cart"
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => handleAddCartButton({
                id,
                title,
                thumbnail,
                price,
              }) }
            >
              Adicionar ao carrinho
            </button>
          </div>)) : <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}

ProductsList.propTypes = {
  searchValue: PropTypes.string,
  categoryValue: PropTypes.string,
  handleAddCartButton: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  searchValue: '',
  categoryValue: '',
};

export default ProductsList;
