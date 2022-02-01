const ADD_SEEN = "ADD_SEEN";
const REMOVE_SEEN = "REMOVE_SEEN";

export const addSeen = (id, title, poster_path, release_date,genre_ids) => ({
  type: ADD_SEEN,
  payload: {
    id,
    title,
    poster_path,
    release_date,
    genre_ids,
  }
});

export const removeSeen = (id) => ({
  type: REMOVE_SEEN,
  payload: id,
});

const seenReducer = (seen = {films: [], count:0}, action) => {
  switch (action.type) {
    case ADD_SEEN:
      return {...seen, films: [...seen.films, action.payload], count: [...seen.films].length+1}
    case REMOVE_SEEN:
      return {...seen, films: [...seen?.films?.filter((item) => item.id !== action.payload)], count: [...seen.films].length-1}
    default:
      return seen;
  }
};

export default seenReducer;