import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      returnFromAPi: [],
    };
  }

  async componentDidMount() {
    const updatedArrayFromApi = await getCategories();
    this.setState({ returnFromAPi: updatedArrayFromApi });
  }

  render() {
    const { returnFromAPi } = this.state;
    return (
      <section>
        {
          returnFromAPi.map(({ name, id }) => (
            <section
              key={ id }
            >
              <button
                type="button"
                data-testid="category"
              >
                { name }
              </button>
            </section>))
        }
      </section>
    );
  }
}
export default Categories;
