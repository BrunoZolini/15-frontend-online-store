import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      title,
      thumbnail,
      price,
    } = this.props;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
