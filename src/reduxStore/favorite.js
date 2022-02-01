const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (id, title, poster_path, release_date,genre_ids) => ({
  type: ADD_FAVORITE,
  payload: {
    id,
    title,
    poster_path,
    release_date,
    genre_ids,
  }
});

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

const favoriteReducer = (favorites = {films: [], count:0}, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {...favorites, films: [...favorites.films, action.payload], count: [...favorites.films].length+1}
    case REMOVE_FAVORITE:
      return {...favorites, films: [...favorites?.films?.filter((item) => item.id !== action.payload)], count: [...favorites.films].length-1}
    default:
      return favorites;
  }
};

export default favoriteReducer;