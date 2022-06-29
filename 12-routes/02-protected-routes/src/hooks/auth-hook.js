import { useCallback, useEffect, useState } from "react";
import { ONE_MIN, ONE_SECOND } from "../constants/time";

// this stay outside of component because not related to re-render
let logoutTimer;

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [token, setToken] = useState();

  const logout = useCallback(() => {
    localStorage.removeItem("test-token");
    setTokenExpirationDate(null);
    setIsLogin(false);
  }, []);

  const login = (expirationDate) => {
    // ask backend to login and get token
    const JWT = "JWT come from backend" + Math.random().toString();

    // generate expiration time
    const currentTime = new Date().getTime();
    const tokenExpirationDate =
      expirationDate || new Date(currentTime + ONE_SECOND * 3);

    // save to storage
    localStorage.setItem(
      "test-token",
      JSON.stringify({
        token: JWT,
        expiration: tokenExpirationDate.toISOString(),
      })
    );

    // set to state
    setTokenExpirationDate(tokenExpirationDate);
    setToken(JWT);
    setIsLogin(true);
  };

  const autoLogout = useCallback(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();

      console.log("remainingTime", remainingTime);

      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      // for manual logout
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  const autoLogin = useCallback(() => {
    const storedData = JSON.parse(localStorage.getItem("test-token"));

    // 1. data is stored
    // 2. data has token
    // 3. token is valid, unexpired
    const isStoredTokenValid =
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date();

    if (isStoredTokenValid) {
      login(new Date(storedData.expiration));
    }
  }, []);

  useEffect(() => {
    autoLogout();
  }, [autoLogout]);

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return {
    isLogin,
    login,
    logout,
  };
};

export default useAuth;
