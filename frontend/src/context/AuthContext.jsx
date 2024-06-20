import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return null;
    }
  });

  // useEffect(() => {
  //   try {
  //     const user = localStorage.getItem('user');
  //     if (user) {
  //       setCurrentUser(JSON.parse(user));
  //     }
  //   } catch (error) {
  //     console.error('Error parsing JSON from localStorage:', error);
  //   }
  // }, []);
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error setting item to localStorage:', error);
    }
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};
