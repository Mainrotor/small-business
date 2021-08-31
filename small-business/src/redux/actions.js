export const login = (username, password) => {
  console.log(username + password + "test");
  return {
    type: "LOGIN",
    value: {
      username,
      password,
    },
  };
};

export const logout = () => {
  return { type: "LOGOUT", value: false };
};
