import React from 'react';
import { getCategories } from '../services/api';

<<<<<<< HEAD
class Categories extends Component {
  render() {
    {
    return (
        <section key={ id }>
          getCategories.map(({ name, id }) => (
          <button data-testid="category">
            { name }
          </button>
        </section>
      ))
      )
    }
=======
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
>>>>>>> d4a50ce32c8e3a6b20d8d66c6597175055d95db1
  }
}

export default Categories;
