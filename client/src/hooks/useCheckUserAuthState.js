import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { me } from "services";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "features/slices/userSlice";

export const useCheckUserAuthState = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkForAuth();
    }
  }, []);

  const checkForAuth = async () => {
    try {
      if (!Object.keys(user).length) {
        const userData = (await me())?.data?.payload;
        dispatch(setUser(userData?.user));
      }
    } catch (error) {
      if (error?.response?.status == 401) {
        navigate("/login");
      }
    }
  };
  return null;
};
