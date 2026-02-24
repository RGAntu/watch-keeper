export const addFavorite = (product) => {
  const favoriteProduct = JSON.stringify(product);
//   console.log(product);
  localStorage.setItem("favorite", favoriteProduct);
};
