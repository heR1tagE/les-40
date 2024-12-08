import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const agreeToTermsRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const agreeToTerms = agreeToTermsRef.current.checked;

    alert(`Submitted: Name - ${name}, Agree to Terms - ${agreeToTerms}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Agree to Terms:
        <input type="checkbox" ref={agreeToTermsRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
