import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { getProductFromId } from '../services/api';
import cart from '../icons/shopping-cart.png';
import RatingForm from './RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      price: '',
      title: '',
      thumbnail: '',
      eachComent: '',
      emailInput: '',
      isButtonDisabled: true,
      rating: '',
      reviewArray: [],
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
      availableQuantity: productReturn.available_quantity,
    });
    this.getProductReview();
  }

  handleReviewInfos = () => {
    const { rating, emailInput, eachComent, reviewArray } = this.state;
    const { match: { params: { id } } } = this.props;
    const reviewObj = {
      productId: id,
      rating,
      emailInput,
      eachComent,
    };
    const arrayUpdated = [...reviewArray, reviewObj];

    this.setState({
      reviewArray: [...reviewArray, reviewObj],
      eachComent: '',
      emailInput: '',
      rating: '',
      isButtonDisabled: true,
    });

    const jsonReview = JSON.stringify(arrayUpdated); // localStorage só aceita receber no formato JSON
    localStorage.setItem(`reviewInfos${id}`, jsonReview);
  }

  getProductReview = () => {
    const { match: { params: { id } } } = this.props;
    const savedReview = localStorage.getItem(`reviewInfos${id}`);
    const reviewParsed = JSON.parse(savedReview);
    if (reviewParsed) {
      this.setState({ reviewArray: reviewParsed });
    } else {
      this.setState({ reviewArray: [] });
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, () => this.handleError());
  }

  handleError = () => {
    const { rating } = this.state;
    if (rating.length) this.setState({ isButtonDisabled: false });
  }

  render() {
    const {
      id,
      price,
      title,
      thumbnail,
      eachComent,
      emailInput,
      isButtonDisabled,
      rating,
      reviewArray,
      availableQuantity,
    } = this.state;

    const {
      handleAddCartButton,
      handleCartButton,
      buttonCartCliked,
      cartList,
      isButtonAddDisable,
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
            disabled={ isButtonAddDisable }
            onClick={ () => handleAddCartButton({
              id,
              title,
              thumbnail,
              price,
              availableQuantity,
            }) }
          >
            Adicionar ao car1inho
          </button>
        </div>
        <RatingForm
          handleChange={ this.handleChange }
          rating={ rating }
          emailInput={ emailInput }
          isButtonDisabled={ isButtonDisabled }
          handleReviewInfos={ this.handleReviewInfos }
          eachComent={ eachComent }
        />
        { reviewArray.map((element, index) => (
          <section key={ index }>
            <p>{ element.rating }</p>
            <p>{ element.emailInput }</p>
            <p>{ element.eachComent }</p>
          </section>
        ))}
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
  cartList: PropTypes.arrayOf(PropTypes.object),
  isButtonAddDisable: PropTypes.bool.isRequired,
};

ProductDetails.defaultProps = {
  cartList: [],
};

export default ProductDetails;
