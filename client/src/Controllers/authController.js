import React, { useContext, useState, useEffect } from "react";
//import fb from "../config/fbconfig";

/* const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function registerAuth(email, password) {
    return;
  }

  function loginAuth(email, password) {
    return;
  }

  function logoutAuth() {
    return;
  }

  useEffect(() => {
    const unsubscribe = (user) => {
      setCurrentUser(user ? user.email : null);
      setLoading(false);
    };
    return () => unsubscribe();
  }, []);

  const value = { currentUser, registerAuth, loginAuth, logoutAuth };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
 */
