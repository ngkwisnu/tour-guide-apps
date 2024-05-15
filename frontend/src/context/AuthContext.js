import { createContext, useEffect, useReducer } from 'react';

//localStorage adalah API Web Storage yang memungkinkan penyimpanan data di browser secara lokal tanpa batas waktu kadaluwarsa
//getItem("user") akan mengambil item bernama "user" dari localStorage. Jika item ini tidak ada, akan mengembalikan null
const initial_state = {
  user: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null,
  //inisialisasi loading dengan false
  loading: false,
  //inisialisai error dengan null agar mudah digunakna jika ada kesalah
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        user: null,
        loading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};


// cari tahu penjelasannya
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
