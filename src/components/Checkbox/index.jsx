import React from "react";
import "./style.css";

export default function Checkbox({
  label,
  name,
  isRequired = false,
  onChange,
  value,
}) {
  return (
    <div className="checkbox__root">
      <label className="checkbox__label" htmlFor={name}>
        {label}
      </label>
      <input
        required
        className="checkbox__input"
        type="checkbox"
        required={isRequired}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}
