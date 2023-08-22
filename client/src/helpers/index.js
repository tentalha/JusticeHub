export const signOut = () => {
  localStorage.removeItem("jwt");
  window.location.href = "/login";
};
