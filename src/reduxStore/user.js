const ADD_FAVORITE =  "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const ADD_SEEN_LIST = "ADD_SEEN_LIST"

export const addSeenList = (movieId) => ({
    type: ADD_SEEN_LIST,
    payload: movieId
})

export const addFavorite = (movieId) => ({
    type: ADD_FAVORITE,
    payload: movieId
})

export const removeFavorite = (movieId) => ({
    type: REMOVE_FAVORITE,
    payload: movieId
})

const userReducer = (movies= [], action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return [...movies, action.payload]
        default: 
            return movies
    }
}

export default userReducer;
