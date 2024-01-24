import React from "react";

const InputText = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputText;
