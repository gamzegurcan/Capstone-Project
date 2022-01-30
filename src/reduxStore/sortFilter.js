const FILTER_DATA = "FILTER_DATA";

export const addGenres = (data) => ({
  type: FILTER_DATA,
  payload: data,
})

const filterReducer = (filteredData = [], action) => {
  switch(action.type) {
    case FILTER_DATA:
      return [...filteredData, action.payload]
    default:
      return filteredData
  }
}

export default filterReducer;