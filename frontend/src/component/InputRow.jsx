import React from "react";

export default function InputRow({ label, error, children }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      {error && <span className="text-sm text-red-500 italic">{error}</span>}
    </div>
  );
}
