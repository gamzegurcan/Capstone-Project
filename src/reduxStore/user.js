const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"

export const userLogin = (username, password) => ({
  type: USER_LOGIN,
  payload: {username, password},
})

export const userLogout = (value) => ({
  type: USER_LOGOUT,
  payload: value,
})


const loginReducer = (user = {
  avatarUrl: 'https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png',
  username: 'gamzegurcan',
  password: 'deneme',
  socials: {
    twitter: 'https://twitter.com/gamzegurcann',
    instagram: 'https://www.instagram.com/gamzegurcann',
    github: 'https://github.com/gamzegurcan'
  },
  joinDate: 'January 2022',
},
action
) => {
  switch (action.type){
    case USER_LOGIN:
      return action.payload.username === user.username &&
      action.payload.password === user.password
      ?{...user, login: true}
      :{...user, login: false};
    case USER_LOGOUT:
      return {...user, login: false}
    default:
      return user;
  }
};

export default loginReducer;