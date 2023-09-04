import Cookies from "js-cookie";

export const signOut = () => {
  removeJWT();
  window.location.href = "/login";
};

export const retrieveJWT = () => {
  const token = Cookies.get("accessToken");
  return token;
};

export const removeJWT = () => {
  Cookies.remove("accessToken");
};

export const setJWT = (token) => {
  Cookies.set("accessToken", token, { expires: 7 });
};
