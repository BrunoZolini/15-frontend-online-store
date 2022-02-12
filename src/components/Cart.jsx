import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Cart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <div>
        <h1>Carrinho:</h1>

        { cartList.length ? (
          cartList.map(({ id, title, thumbnail, price, quantity }) => (
            <div key={ id }>
              <ProductCard
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
              <span>Quantidade: </span>
              <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
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
