import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <authContext.Provider value={{ currentUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
