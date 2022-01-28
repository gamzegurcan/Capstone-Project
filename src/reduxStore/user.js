const ADD_FAVORITE =  "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const ADD_SEEN_LIST = "ADD_SEEN_LIST"

export const addSeenList = (id) => ({
    type: ADD_SEEN_LIST,
    payload: id
})

export const addFavorite = (id, title, poster_path, release_date) => ({
    type: ADD_FAVORITE,
    payload: {
      id,
      title,
      poster_path,
      release_date
    }
})

export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id
})

const userReducer = (user= [], action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return  [...user, action.payload]
        case REMOVE_FAVORITE:
            return user?.filter((item) => item.id !== action.payload)
        default: 
            return user
    }
}

export default userReducer;
