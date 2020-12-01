export const isBrowser = () => typeof window !== "undefined";

interface user {
  email: string;
  password: string;
}

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

export const setUser = (user) =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user));

//checking if the email already exist in local storage then retur true or false
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.email;
};

export const logout = (firebase) => {
  return new Promise<void>((resolve) => {
    firebase.auth().signOut.then(() => {
      setUser({});
      resolve();
    });
  });
};