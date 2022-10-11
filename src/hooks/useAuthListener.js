import { useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { Context } from "../context";

const useAuthListener = () => {
  const [user, setUser] = useState({});
  const [ratingUser, setRatingUser] = useContext(Context);
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);
  return { user };
};

export default useAuthListener;
