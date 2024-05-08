import React, { useState, useRef } from 'react';

const SignUpForm = ({ onSubmit }) => {
  // Define state variables using useState
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Create a reference to the password input field
  const passwordRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform basic validation on user input
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Full name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);

    // If no errors, call the parent component function
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ fullName, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      {errors.fullName && <p>{errors.fullName}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;