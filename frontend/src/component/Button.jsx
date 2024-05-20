import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ onClick, type, children }) {
  const base = ' rounded-full font-semibold px-6 py-2 flex items-center gap-2 justify-center';

  const style = {
    primary: `${base} bg-regent-500 text-regent-100 hover:bg-regent-800`,
    secondary: `${base} bg-gray-50 text-regent-500 border border-regent-500 hover:bg-gray-700`,
    full: `${base} bg-regent-500 text-regent-100 w-full hover:bg-regent-800`,
    circle: 'bg-regent-500 w-10 h-10 flex items-center justify-center rounded-full text-regent-100 hover:bg-regent-800',
    halfFull: `${base} bg-regent-500 text-regent-100 w-1/2 mx-auto hover:bg-regent-800`,
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
}
