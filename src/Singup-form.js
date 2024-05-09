import React, { useState, useRef } from 'react';

const SignUpForm = ({ onSubmit }) => {
  // Define state variables using useState
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
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
    if(password.length < 8) newErrors.password = 'password must be atleast 8 characters long';

    setErrors(newErrors);

    // If no errors, call the parent component function
    if (Object.keys(newErrors).length === 0) {
      onSubmit({ fullName, email, password });
    }
  };

  return (
    
    <div className="container">
      <hearder>
        <h1>Connect to VCMS</h1>
        <h2>Create Profile</h2>
      </hearder>
      <main>
        <p>By completing your profile, You'll unlock the full potential of our Platform!!</p>
            <form onSubmit={handleSubmit}>      
     <p> <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      /></p>

      {errors.fullName && <p>{errors.fullName}</p>}

     <p> <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></p>
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Password:</label>
     <p> <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
      /></p>
      {errors.password && <p>{errors.password}</p>}

     <p> <button type="submit">Create Profile</button></p>
    </form>
    <p>or</p>
    <a href="#"> <button>Continue with Google</button></a>
    </main>
    <footer>
    <p>Already have an account? <a href="#">Sign In</a></p>
    </footer>   
    </div>
  );
};

export default SignUpForm;