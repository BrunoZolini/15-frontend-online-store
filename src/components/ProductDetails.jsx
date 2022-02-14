import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      productImage: '',
    };
  }
  // comentario desnecessario

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const productReturn = await getProductFromId(id);
    this.setState({
      title: productReturn.title,
      productImage: productReturn.thumbnail,
    });
  }

  render() {
    const { location: { state: { handleAddCartButton } } } = this.props;
    console.log(handleAddCartButton);
    const { title, productImage } = this.state;
    return (
      <div>
        <p
          data-testid="product-detail-name"
        >
          { title }

        </p>
        <img src={ productImage } alt={ title } />
        <button
          className="button-add-cart"
          type="button"
          data-testid="product-detail-add-to-cart"
          // onClick={ () => handleAddCartButton({
          // id,
          // title,
          // thumbnail,
          // price,
          // }) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      handleAddCartButton: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
