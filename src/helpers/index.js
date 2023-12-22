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

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
