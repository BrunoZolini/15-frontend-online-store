import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Cart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <h1>Carrinho:</h1>
        <div className="products-list">
          { cartList.length ? (
            cartList.map(({ id, title, thumbnail, price, quantity }) => (
              <div
                className="product-card"
                key={ id }
              >
                <ProductCard
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                  quantity={ quantity }
                />
                <div>
                  <span>Quantidade: </span>
                  <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
                </div>
              </div>
            ))
          )
            : (
              <div>
                <span
                  data-testid="shopping-cart-empty-message"
                >
                  Seu carrinho está vazio
                </span>
              </div>
            )}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

Cart.defaultProps = {
  cartList: [],
};

export default Cart;
