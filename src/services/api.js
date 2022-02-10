export async function getCategories() {
  try {
    const availableCategoriesUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
    const apiFetch = await fetch(availableCategoriesUrl);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    return new Error('Erro: algo deu errado');
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const availableCategoriesUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const apiFetch = await fetch(availableCategoriesUrl);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    throw new Error('Erro: algo deu errado');
  }
}
