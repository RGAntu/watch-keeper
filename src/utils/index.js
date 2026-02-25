

export const getFavorites = () => {
  try {
    const data = localStorage.getItem("favorite");
    const parsed = data ? JSON.parse(data) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Invalid favorite data", error);
    return [];
  }
};

export const addFavorite = (product) => {
  const favorites = getFavorites();

  const isExist = favorites.some(p => p.id === product.id);

  if (isExist) {
    alert("Phone is already added");
    return;
  }

  favorites.push(product);
  localStorage.setItem("favorite", JSON.stringify(favorites));
  // console.log(favorites, typeof favorites)
};
