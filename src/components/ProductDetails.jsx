import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { getProductFromId } from '../services/api';
import cart from '../icons/shopping-cart.png';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      price: '',
      title: '',
      thumbnail: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const productReturn = await getProductFromId(id);
    this.setState({
      id: productReturn.id,
      price: productReturn.price,
      title: productReturn.title,
      thumbnail: productReturn.thumbnail,
    });
  }

  render() {
    const { id, price, title, thumbnail } = this.state;

    const {
      handleAddCartButton,
      handleCartButton,
      buttonCartCliked,
      cartList,
    } = this.props;

    return (
      <section>
        { buttonCartCliked && <Redirect to="/" /> }

        <div>
          <Link to="/">Home</Link>
          <button
            className="button-cart"
            data-testid="shopping-cart-button"
            type="button"
            onClick={ () => handleCartButton(buttonCartCliked) }
          >
            <img className="img-cart" src={ cart } alt="shopping-cart-icon" />
            <span
              className="cart-counter"
              data-testid="shopping-cart-size"
            >
              { cartList.reduce((acc, { quantity }) => {
                if (!quantity) return acc;
                acc += quantity;
                return acc;
              }, 0) }
            </span>
          </button>
        </div>
        <div>
          <p
            data-testid="product-detail-name"
          >
            { title }

          </p>
          <img src={ thumbnail } alt={ title } />
          <button
            className="button-add-cart"
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleAddCartButton({
              id,
              title,
              thumbnail,
              price,
            }) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,

  handleAddCartButton: PropTypes.func.isRequired,
  handleCartButton: PropTypes.func.isRequired,
  buttonCartCliked: PropTypes.bool.isRequired,
  cartList: PropTypes.arrayOf({}),
};

ProductDetails.defaultProps = {
  cartList: [],
};

export default ProductDetails;
