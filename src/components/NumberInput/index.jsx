import React from "react";
import "./style.css";

export default function TextInput({
  label,
  isRequired = false,
  min = 0,
  max = 100,
  name,
  initialValue,
  inputRef,
  onChange,
  defaultValue,
}) {

  return (
    <div className="number-input__root">
      <label htmlFor={name} className="number-input__label">
        {label}
      </label>
      <input
        onChange={onChange}
        className="number-input__input"
        min={min}
        max={max}
        value={initialValue}
        type="number"
        ref={inputRef}
        required={isRequired}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}
