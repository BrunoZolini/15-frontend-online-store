import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      returnFromApi: [],
    };
  }

  async componentDidMount() {
    const updatedArrayFromApi = await getCategories();
    this.setState({ returnFromApi: updatedArrayFromApi });
  }

  render() {
    const { onClickCategory } = this.props;
    const { returnFromApi } = this.state;
    return (
      <section>
        {
          returnFromApi.map(({ name, id }) => (
            <section
              key={ id }
            >
              <button
                type="button"
                data-testid="category"
                onClick={ () => onClickCategory(id) }
              >
                { name }
              </button>
            </section>))
        }
      </section>
    );
  }
}

Categories.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default Categories;
