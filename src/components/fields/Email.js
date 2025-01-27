import React, { useState } from "react";

const EmailInput = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const email = e.target.value;
    onChange(e);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div className="">
      <input
        type="email"
        className={`form-control ${isValid === null ? "" : isValid ? "is-valid" : "is-invalid"}`}
        placeholder="Email"
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default EmailInput;
