import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PurchaseCart extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <section>
        <div>
          <h2>Revise seus produtos</h2>
          { cartList.map(({ id, thumbnail, title, price, quantity }) => (
            <div
              className="product"
              key={ id }
            >
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <img
                className="img-product"
                src={ thumbnail }
                alt={ title }
              />
              <div>
                <span>Quantidade:  </span>
                <span>{ quantity }</span>
              </div>
              <div>
                <span>Preço Total:  </span>
                <span>{ price * quantity }</span>
              </div>
            </div>
          )) }
          <div>
            <span>Total: </span>
            <span>
              { cartList.reduce((acc, { price, quantity }) => {
                acc += (price * quantity);
                return acc;
              }, 0)}
            </span>
          </div>
        </div>
        <div>
          <h2>Informações do Comprador</h2>
          <form>
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
            />
            <input
              data-testid="checkout-email"
              type="email"
              placeholder="Email"
            />
            <input
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
            />
            <input
              data-testid="checkout-phone"
              type="text"
              placeholder="Telefone"
            />
            <input
              data-testid="checkout-cep"
              type="text"
              placeholder="CEP"
            />
            <input
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço"
            />
          </form>
        </div>
        <button type="button">Comprar</button>
      </section>
    );
  }
}

PurchaseCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object),
};

PurchaseCart.defaultProps = {
  cartList: [],
};
