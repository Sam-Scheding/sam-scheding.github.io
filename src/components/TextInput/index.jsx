import React from "react";
import "./style.css";

export default function TextInput({
  label,
  isRequired = false,
  placeholder,
  name,
  inputRef,
  onChange,
  value,
}) {

  return (
    <div className="text-input__root">
      <label htmlFor={name} className="text-input__label">
        {label}
      </label>
      <input
        onChange={onChange}
        className="text-input__input"
        placeholder={placeholder}
        type="text"
        ref={inputRef}
        required={isRequired}
        name={name}
        value={value}
      />
    </div>
  );
}
