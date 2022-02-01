const THEME_CHANGE = "THEME_CHANGE";

export const themeChanger = (value) => ({
  type: THEME_CHANGE,
  payload: value,
})

const themeChangeReducer = (theme = 'true', action) => {
  switch(action.type){
    case THEME_CHANGE:
      return !action.payload
    default:
      return theme
  }
}

export default themeChangeReducer;