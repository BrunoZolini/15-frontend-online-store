import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const {
      handleChange,
      rating,
      emailInput,
      isButtonDisabled,
      handleReviewInfos,
      eachComent,
    } = this.props;
    return (
      <form>
        <label htmlFor="rating" name="rating" required>

          <label htmlFor="1-rating">
            <input
              type="radio"
              id="1-rating"
              name="rating"
              value="1"
              onChange={ handleChange }
              data-testid="1-rating"
              checked={ rating === '1' }
            />
            1
          </label>

          <label htmlFor="2-rating">
            <input
              type="radio"
              id="2-rating"
              name="rating"
              value="2"
              onChange={ handleChange }
              data-testid="2-rating"
              checked={ rating === '2' }
            />
            2
          </label>

          <label htmlFor="3-rating">
            <input
              type="radio"
              id="3-rating"
              name="rating"
              value="3"
              onChange={ handleChange }
              data-testid="3-rating"
              checked={ rating === '3' }
            />
            3
          </label>

          <label htmlFor="4-rating">
            <input
              type="radio"
              id="4-rating"
              name="rating"
              value="4"
              onChange={ handleChange }
              data-testid="4-rating"
              checked={ rating === '4' }
            />
            4
          </label>

          <label htmlFor="5-rating">
            <input
              type="radio"
              id="5-rating"
              name="rating"
              value="5"
              onChange={ handleChange }
              data-testid="5-rating"
              checked={ rating === '5' }
            />
            5
          </label>
        </label>

        <input
          type="email"
          onChange={ handleChange }
          data-testid="product-detail-email"
          value={ emailInput }
          name="emailInput"
        />

        <textarea
          name="eachComent"
          onChange={ handleChange }
          data-testid="product-detail-evaluation"
          value={ eachComent }
        />
        <button
          type="button"
          data-testid="submit-review-btn"
          disabled={ isButtonDisabled }
          onClick={ handleReviewInfos }
        >
          Avaliar
        </button>
      </form>
    );
  }
}
export default RatingForm;

RatingForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  handleReviewInfos: PropTypes.func.isRequired,
  eachComent: PropTypes.string.isRequired,
};
