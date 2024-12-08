import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    agreeToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Agree to Terms:
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
