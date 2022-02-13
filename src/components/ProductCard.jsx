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
      <div
        className="product"
        data-testid="product"
      >
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img
          className="img-product"
          src={ thumbnail }
          alt={ title }
        />
        <div>
          <span>Preço:  </span>
          <span>{ price }</span>
        </div>
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
