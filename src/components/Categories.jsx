import React, { Component } from "react";
import { getCategories } from "../services/api";

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
  }
}

export default Categories;