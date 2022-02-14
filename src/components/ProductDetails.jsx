import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productName: '',
      productImage: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const productReturn = await getProductFromId(id);
    this.setState({
      productName: productReturn.title,
      productImage: productReturn.thumbnail,
    });
  }

  render() {
    const { productName, productImage } = this.state;
    return (
      <div>
        <p>{ productName }</p>
        <img src={ productImage } alt={ productName } />
        {/* <div>oi</div> */}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
