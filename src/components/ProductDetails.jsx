import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductFromId } from '../services/api';

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
    } = this.props;

    return (
      <section>
        <Link to="/">Home</Link>
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
};

export default ProductDetails;
