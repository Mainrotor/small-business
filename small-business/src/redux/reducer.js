import { combineReducers } from "redux";

const loggedIn = (state = null) => state;

const user = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      //let userState = [...state];
      console.log(state);
      break;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn, user });
