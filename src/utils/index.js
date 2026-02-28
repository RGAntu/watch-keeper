
// Favorite 
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



// remove 
export const removeFavorite = id => {
  const favorites = getFavorites();
  const remainingFavorites =  favorites.filter( product => product.id !== id)
  localStorage.setItem('favorite', JSON.stringify(remainingFavorites))
}




// Cart 

export const getCart = () => {
  try {
    const data = localStorage.getItem("cart");
    const parsed = data ? JSON.parse(data) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Invalid favorite data", error);
    return [];
  }
};

export const addCart = (product) => {
  const carts = getCart();

  const isExist = carts.some(p => p.id === product.id);

  if (isExist) {
    alert("Phone is already added");
    return;
  }

  carts.push(product);
  localStorage.setItem("cart", JSON.stringify(carts));
  // console.log(favorites, typeof favorites)
};



// remove 
export const removeCart = id => {
  const carts = getCart();
  const remainingCarts =  carts.filter( product => product.id !== id)
  localStorage.setItem('cart', JSON.stringify(remainingCarts))
}