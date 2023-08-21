import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { me } from "services";

export const useCheckUserAuthState = () => {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  console.log("herer");

  useEffect(() => {
    jwt ? checkForAuth() : navigate("/login");
  }, []);

  const checkForAuth = async () => {
    const response = await me();
    if (response.status == 401) {
      navigate("/login");
    }
  };
};
