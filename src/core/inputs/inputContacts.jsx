import React from "react";
import "./input.scss";

function InputContacts({
  name,
  className,
  type,
  placeholder,
  contacts,
  handleInput,
}) {
  return (
    <label>
      Contacts
      <input
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={contacts}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
    </label>
  );
}

export { InputContacts };
