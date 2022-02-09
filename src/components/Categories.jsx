import React, { Component } from "react";
import { getCategories } from "../services/api";


class Categories extends Component {
  render() {
      const { getCategories } = this;
      return (
        {
            getCategories.map(({ name, id }) => (
            <section
            key={ id }
            >
            <button
            type="button"
            data-testid="category"
            >
            { console.log(name) }
            </button>
            </section>))
        }
      )
  }
}

export default Categories;