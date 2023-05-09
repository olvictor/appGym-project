import React from "react";

const Input = ({ type, label, value, handleChange, name, placeholder }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
