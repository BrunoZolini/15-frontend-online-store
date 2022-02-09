export async function getCategories() {
  try {
    const availableCategoriesUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
    const apiFetch = await fetch(availableCategoriesUrl);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    throw new Error('Erro: algo deu errado');
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const availableCategoriesUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const apiFetch = await fetch(availableCategoriesUrl);
    const apiJson = apiFetch.json();
    return apiJson;
  } catch (error) {
    throw new Error('Erro: algo deu errado');
  }
}

// Lista as categorias da API. Exemplo: games, roupas, kids etc
// Cada categoria será um button (map na api e cada elemento será um button -> <button>{element}</button>). Isso dentro do render
// deve adicionar o atributo id sei lá o que em cada item
