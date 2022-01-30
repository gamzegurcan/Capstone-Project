const USER_LOGIN = "USER_LOGIN"

export const userLogin = (username, password) => ({
  type: USER_LOGIN,
  payload: {username, password},
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
    default:
      return user;
  }
};

export default loginReducer;