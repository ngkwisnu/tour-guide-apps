import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user') || null);
  // const login = async (inputs) => {
  //   try {
  //     const res = await fetch('http://18.141.9.175:5000/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //       body: JSON.stringify(inputs),
  //     });

  //     if (!res.ok) {
  //       throw new Error('Login failed');
  //     }

  //     const data = await res.json();
  //     setCurrentUser(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};
