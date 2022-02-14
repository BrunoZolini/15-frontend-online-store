import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Cart extends Component {
  render() {
    const {
      cartList,
      onAddButton,
      onDecreaseButton,
      onRemoveButton,
    } = this.props;
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
                <button
                  type="button"
                  onClick={ () => onRemoveButton({
                    id,
                    title,
                    thumbnail,
                    price,
                    quantity,
                  }) }
                >
                  REMOVER
                </button>
                <ProductCard
                  title={ title }
                  thumbnail={ thumbnail }
                  price={ price }
                  quantity={ quantity }
                />
                <div>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ () => onDecreaseButton({
                      id,
                      title,
                      thumbnail,
                      price,
                      quantity,
                    }) }
                  >
                    -
                  </button>
                  <span>Quantidade: </span>
                  <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => onAddButton({
                      id,
                      title,
                      thumbnail,
                      price,
                      quantity,
                    }) }
                  >
                    +
                  </button>
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
  onAddButton: PropTypes.func.isRequired,
  onDecreaseButton: PropTypes.func.isRequired,
  onRemoveButton: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  cartList: [],
};

export default Cart;
