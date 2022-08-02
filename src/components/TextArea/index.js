import React from "react";
import "./style.css";

export default function TextArea({
  label,
  isRequired = false,
  placeholder,
  name,
  inputRef,
  onChange,
  defaultValue,
}) {
  return (
    <div className="textAreaWrapper">
      <label htmlFor={name}>{label}</label>
      <textarea
        onChange={onChange}
        className="textArea"
        placeholder={placeholder}
        type="text"
        ref={inputRef}
        required={isRequired}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
}
