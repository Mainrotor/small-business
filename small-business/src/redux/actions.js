export const login = (username, password) => {
  return {
    type: "LOGIN",
    value: {
      username,
      password,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    value: "",
  };
};

export const deleteListing = (index) => {
  return {
    type: "DELETE",
    value: index,
  };
};

export const create = (payload) => {
  return {
    type: "CREATE",
    value: payload,
  };
};
