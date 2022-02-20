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
    const { handleAddCartButton, isButtonAddDisable } = this.props;
    return (
      <div className="products-list">
        { productsList.length ? productsList.map(({
          id,
          title,
          thumbnail,
          price,
          available_quantity: availableQuantity,
          shipping: { free_shipping: freeShipping },
        }) => (
          <div
            className="product-card"
            key={ id }
          >
            <ProductCard
              freeShipping={ freeShipping }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }

            />
            <button
              className="button-add-cart"
              type="button"
              data-testid="product-add-to-cart"
              disabled={ isButtonAddDisable }
              onClick={ () => handleAddCartButton({
                id,
                title,
                thumbnail,
                price,
                availableQuantity,
              }) }
            >
              Adicionar ao carrinho
            </button>
            <Link
              to={ `/product-details/${id}` }
              data-testid="product-detail-link"
            >
              Detalhes

            </Link>
          </div>)) : <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}

ProductsList.propTypes = {
  searchValue: PropTypes.string,
  categoryValue: PropTypes.string,
  handleAddCartButton: PropTypes.func.isRequired,
  isButtonAddDisable: PropTypes.bool.isRequired,
};

ProductsList.defaultProps = {
  searchValue: '',
  categoryValue: '',
};

export default ProductsList;
