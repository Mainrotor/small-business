import { combineReducers } from "redux";

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      state = [true];
      return state;
      break;
    case "LOGOUT":
      let logoutState = [...state];
      logoutState = [false];
      return logoutState;
      break;
    default:
      return state;
  }
};

const user = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      let userState = { ...state };
      userState = { ...action.value };
      return userState;
      break;
    case "LOGOUT":
      let userStateEmpty = { ...state };
      userStateEmpty = { ...action.value };
      return userStateEmpty;
      break;
    default:
      return state;
  }
};

const listings = (state = [], action) => {
  switch (action.type) {
    case "DELETE":
      let spreadState = [...state];
      let selectedIndex = spreadState.find((x) => x.id === action.value);
      spreadState.splice(selectedIndex.id, 1);
      return spreadState;
      break;
    case "CREATE":
      state = [...state, action.value];
      return state;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn, user, listings });
