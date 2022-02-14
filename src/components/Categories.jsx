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
      <section className="section-categories">
        <h1>Categorias:</h1>
        {
          returnFromApi.map(({ name, id }) => (
            <div
              className="item-categorie"
              key={ id }
            >
              <button
                className="button-categorie"
                type="button"
                data-testid="category"
                onClick={ () => onClickCategory(id) }
              >
                { name }
              </button>
            </div>))
        }
      </section>
    );
  }
}

Categories.propTypes = {
  onClickCategory: PropTypes.func.isRequired,
};

export default Categories;
