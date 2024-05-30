import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Add user state

  const login = (username, password) => {
    // Allow any username and password combination
    setIsAuthenticated(true);
    setUser({ username }); // Set user information
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Clear user information on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
