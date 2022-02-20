import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      quantity,
      freeShipping,
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
        {
          freeShipping && <p data-testid="free-shipping">Frete Grátis</p>
        }
        <div>
          <span>Preço:  </span>
          <span>{ price * quantity }</span>
        </div>

      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  freeShipping: PropTypes.bool.isRequired,
};

ProductCard.defaultProps = {
  quantity: 1,

};

export default ProductCard;
