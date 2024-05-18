import React from "react";
import { Link } from "react-router-dom";

export default function Button({ onClick, type, children }) {
  const base =
    " rounded-full font-semibold px-6 py-2 flex items-center gap-2 justify-center";

  const style = {
    primary: `${base} bg-sky-500 text-sky-50`,
    secondary: `${base} bg-white text-sky-500 border border-sky-500`,
    full: `${base} bg-sky-500 text-sky-50 w-full`,
    circle:
      "bg-sky-500 w-10 h-10 flex items-center justify-center rounded-full text-sky-50",
    halfFull: `${base} bg-sky-500 text-sky-50 w-1/2 mx-auto`,
  };

  return (
    <button className={style[type]} onClick={onClick}>
      {children}
    </button>
  );
}
