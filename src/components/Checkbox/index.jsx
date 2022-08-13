import React from "react";
import "./style.css";

export default function Checkbox({ label, name, onChange, value, defaultValue }) {
  return (
    <div className="checkbox__root">
      <label className="toggle" htmlFor={name}>
        {label}
        <input
          className="toggle-checkbox"
          type="checkbox"
          name={name}
          value={value ? "attending" : "not attending"}
          defaultChecked={defaultValue}
          checked={value}
          onChange={onChange}
        />
        <div className="toggle-switch" onClick={onChange}></div>
        <span className="toggle-label">{value ? "Yes" : "No"}</span>
      </label>
    </div>
  );
}
